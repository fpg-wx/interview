import 'babel-polyfill';

import Vue from 'vue';

import router from '../router';
import store from '../store/index';
import App from '../component/App.vue';

import Platform from './plugin/platform.js';

import 'jquery';
import 'materialize-css/dist/js/materialize.js';

import 'materialize-css/dist/css/materialize.min.css';


const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#app');
