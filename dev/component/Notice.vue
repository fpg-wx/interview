<template lang="html">
    <div class="notice">
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">{{title}}</span>
                        <p>{{content}}</p>
                        <p>{{warn}}</p>
                    </div>
                    <div class="card-action">
                        <a v-for="(examination, index) in examinations"
                            :href="examination"
                            target="_blank">
                            examination {{index + 1}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Success',
            content: 'Next, please complete the following exercises.',
            warn: 'WARN: DO NOT close any windows',
            examinations: [
                'http://codepen.io/joshuayang/pen/LbaQQJ',
                'http://codepen.io/joshuayang/pen/LbaQQJ',
            ],
        };
    },
}
</script>

<style lang="scss">
</style>
