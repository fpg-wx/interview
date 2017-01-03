<template lang="html">
    <div class="home container valign-wrapper">
        <div class="valign">
            <div class="row">
                <div class="col s12 m4 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="image/card1.jpg" alt="">
                            <span class="card-title">Basic</span>
                        </div>
                        <div class="card-content">
                            <button
                                :class="['waves-effect waves-light btn', {
                                            'pink lighten-1': !basicInfo.edited,
                                        }]"
                                @click="pushRoute('basicInfo')">
                                <template v-if="basicInfo.edited">
                                    Done<i class="material-icons right">done</i>
                                </template>

                                <template v-if="!basicInfo.edited">
                                    Edit<i class="material-icons right">mode_edit</i>
                                </template>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col s12 m4 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="image/card2.jpg" alt="">
                            <span class="card-title">Education</span>
                        </div>

                        <div class="card-content">
                            <button
                                :class="['waves-effect waves-light btn', {
                                            'pink lighten-1': !eduInfo.edited,
                                        }]"
                                @click="pushRoute('eduInfo')">
                                <template v-if="eduInfo.edited">
                                    Done<i class="material-icons right">done</i>
                                </template>

                                <template v-if="!eduInfo.edited">
                                    Edit<i class="material-icons right">mode_edit</i>
                                </template>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col s12 m4 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="image/card3.jpg" alt="">
                            <span class="card-title">Work</span>
                        </div>

                        <div class="card-content">
                            <button
                                :class="['waves-effect waves-light btn', {
                                            'pink lighten-1': !workInfo.edited,
                                        }]"
                                @click="pushRoute('workInfo')">
                                <template v-if="workInfo.edited">
                                    Done<i class="material-icons right">done</i>
                                </template>

                                <template v-if="!workInfo.edited">
                                    Edit<i class="material-icons right">mode_edit</i>
                                </template>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button
                class="waves-effect waves-light btn btn-large btn-submit pink lighten-1"
                @click="submitHandler"
                v-if="enableSubmit">
                submit<i class="material-icons right">launch</i>
            </button>
        </div>
    </div>
</template>

<script>
import {
    mapGetters,
    mapActions,
} from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'basicInfo',
            'eduInfo',
            'workInfo',
        ]),
        enableSubmit() {
            return [
                this.basicInfo,
                this.eduInfo,
                this.workInfo,
            ].every(info => info.edited);
        },
    },
    methods: {
        ...mapActions([
            'submitUserInfo',
        ]),
        pushRoute(name) {
            this.$router.push({
                name,
            });
        },
        submitHandler() {
            this.submitUserInfo();

            this.$router.push({
                name: 'notice',
            });
        },
    },
}
</script>

<style lang="scss">
.home{
    height: 100%;

    .valign{
        width: 100%;
    }

    .card{
        .card-image{
            overflow: hidden;
        }

        img{
            transition: transform 1.2s ease;
        }

        &:hover{
            img{
                transform: scale(1.15);
            }
        }
    }

    .btn-submit{
        display: block;
        margin: 0 auto;
        margin-top: 3rem;
    }
}
</style>
