<template lang="html">
    <div class="edu-info info-container container valign-wrapper">
        <div class="card valign">
            <i class="material-icons btn-close"
                @click="closeHandler">shuffle</i>

            <div class="card-content">
                <span class="card-title">Education Background</span>

                <div class="row">
                    <div class="date-field col s12 m6 l4">
                        <input
                            type="date"
                            id="educateFrom"
                            ref="educateFrom"
                            :value="props.educateFrom"
                            placeholder="Choose...">
                        <label for="birthday">From</label>
                    </div>

                    <div class="date-field col s12 m6 l4">
                        <input
                            type="date"
                            id="educateTo"
                            ref="educateTo"
                            :value="props.educateTo"
                            placeholder="Choose...">
                        <label for="educateTo">To</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="school"
                            ref="school"
                            :value="props.school">
                        <label for="school">School</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="major"
                            ref="major"
                            :value="props.major">
                        <label for="major">Major</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="diploma"
                            ref="diploma"
                            :value="props.diploma">
                        <label for="diploma">Diploma</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="english"
                            ref="english"
                            :value="props.english">
                        <label for="english">English Ability</label>
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
            'eduInfo',
        ]),
    },
    methods: {
        ...mapActions([
            'updateEduInfo',
        ]),
        clickHandler() {
            const payload = {};

            for(const ref in this.$refs){
                payload[ref] = this.$refs[ref].value;
            }

            this.updateEduInfo(payload);

            this.$router.back();
        },
        closeHandler() {
            this.$router.back();
        },
    },
    created() {
        for(const prop in this.eduInfo){
            this.$set(this.props, prop, this.eduInfo[prop]);
        }
    },
    mounted() {
        $(this.$refs.educateFrom).pickadate({
            format: 'yyyy-mm-dd',
            selectMonths: true,
            selectYears: true,
            min: new Date(2009, 0 ,1),
            max: Date.now(),
        });

        $(this.$refs.educateTo).pickadate({
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
.edu-info{

}
</style>
