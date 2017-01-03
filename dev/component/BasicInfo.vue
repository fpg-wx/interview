<template lang="html">
    <div class="basic-info info-container container valign-wrapper">
        <div class="card valign">
            <i class="material-icons btn-close"
                @click="closeHandler">shuffle</i>

            <div class="card-content">
                <span class="card-title">Basic Information</span>

                <div class="row">
                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="name"
                            ref="name"
                            :value="props.name">
                        <label for="name">Name</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <select
                            ref="sex"
                            :value="props.sex">
                            <option
                                value=""
                                disabled
                                :selected="props.sex === ''">Choose...</option>
                            <option
                                value="0"
                                :selected="props.sex === '0'">Male</option>
                            <option
                                value="1"
                                :selected="props.sex === '1'">Female</option>
                        </select>
                        <label>Sex</label>
                    </div>

                    <div class="date-field col s12 m6 l4">
                        <input
                            type="date"
                            id="birthday"
                            ref="birthday"
                            :value="props.birthday"
                            placeholder="Choose...">
                        <label for="birthday">Birthday</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="nativePlace"
                            ref="nativePlace"
                            :value="props.nativePlace">
                        <label for="nativePlace">Native Place</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="email"
                            id="mail"
                            ref="mail"
                            :value="props.mail">
                        <label for="mail">Mail</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="tel"
                            id="phone"
                            ref="phone"
                            :value="props.phone">
                        <label for="phone">Phone</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="applyFor"
                            ref="applyFor"
                            :value="props.applyFor">
                        <label for="applyFor">Position Apply For</label>
                    </div>

                    <div class="input-field col s12 m6 l4">
                        <input
                            type="text"
                            id="salary"
                            ref="salary"
                            :value="props.salary">
                        <label for="salary">Expected Salary</label>
                    </div>

                    <div class="date-field col s12 m6 l4">
                        <input
                            type="date"
                            id="arrive"
                            ref="arrive"
                            :value="props.arrive"
                            placeholder="Choose...">
                        <label for="arrive">Date of Arrival</label>
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
            'basicInfo',
        ]),
    },
    methods: {
        ...mapActions([
            'updateBasicInfo',
        ]),
        clickHandler() {
            const payload = {};

            for(const ref in this.$refs){
                payload[ref] = this.$refs[ref].value;
            }

            this.updateBasicInfo(payload);

            this.$router.back();
        },
        closeHandler() {
            this.$router.back();
        },
    },
    created() {
        for(const prop in this.basicInfo){
            this.$set(this.props, prop, this.basicInfo[prop]);
        }
    },
    mounted() {
        $(this.$refs.sex).material_select();

        $(this.$refs.birthday).pickadate({
            format: 'yyyy-mm-dd',
            selectMonths: true,
            selectYears: true,
            min: new Date(1990, 0 ,1),
            max: new Date(1999, 11, 31),
        });

        $(this.$refs.arrive).pickadate({
            format: 'yyyy-mm-dd',
            selectMonths: true,
            selectYears: 1,
            min: Date.now(),
        });

        Materialize.updateTextFields();
    },
}
</script>

<style lang="scss">
.basic-info{

}
</style>
