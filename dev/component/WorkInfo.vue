<template lang="html">
    <div class="work-info info-container container valign-wrapper">
        <div class="card valign">
            <i class="material-icons btn-close"
                @click="closeHandler">shuffle</i>

            <div class="card-content">
                <span class="card-title">Work Experience</span>

                <div class="row">
                    <div class="date-field col s12 m6 l4">
                        <input
                            type="date"
                            id="workFrom"
                            ref="workFrom"
                            :value="props.workFrom"
                            placeholder="Choose...">
                        <label for="workFrom">From</label>
                    </div>

                    <div class="date-field col s12 m6 l4">
                        <input
                            type="date"
                            id="workTo"
                            ref="workTo"
                            :value="props.workTo"
                            placeholder="Choose...">
                        <label for="workTo">To</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="company"
                            ref="company"
                            :value="props.company">
                        <label for="company">Company</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="position"
                            ref="position"
                            :value="props.position">
                        <label for="position">Position</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="treatment"
                            ref="treatment"
                            :value="props.treatment">
                        <label for="treatment">Treatment</label>
                    </div>

                    <div class="input-field col s12">
                        <textarea
                            class="materialize-textarea"
                            id="leaveReason"
                            ref="leaveReason"
                            :value="props.leaveReason"></textarea>
                        <label for="leaveReason">Reasons for leaving</label>
                    </div>
                </div>
            </div>

            <div class="card-action">
                <button
                    class="waves-effect waves-light btn btn-done"
                    @click="clickHandler">
                    save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapGetters,
    mapActions,
} from 'vuex';

export default {
    data() {
        return {
            props: {},
        };
    },
    computed: {
        ...mapGetters([
            'workInfo',
        ]),
    },
    methods: {
        ...mapActions([
            'updateWorkInfo',
        ]),
        clickHandler() {
            const payload = {};

            for(const ref in this.$refs){
                payload[ref] = this.$refs[ref].value;
            }

            this.updateWorkInfo(payload);

            this.$router.back();
        },
        closeHandler() {
            this.$router.back();
        },
    },
    created() {
        for(const prop in this.workInfo){
            this.$set(this.props, prop, this.workInfo[prop]);
        }
    },
    mounted() {
        $(this.$refs.workFrom).pickadate({
            format: 'yyyy-mm-dd',
            selectMonths: true,
            selectYears: true,
            min: new Date(2009, 0 ,1),
            max: Date.now(),
        });

        $(this.$refs.workTo).pickadate({
            format: 'yyyy-mm-dd',
            selectMonths: true,
            selectYears: true,
            min: new Date(2009, 0 ,1),
            max: Date.now(),
        });

        Materialize.updateTextFields();
    },
}
</script>

<style lang="scss">
.work-info{

}
</style>
