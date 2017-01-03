import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './component/Home.vue';
import BasicInfo from './component/BasicInfo.vue';
import EduInfo from './component/EduInfo.vue';
import WorkInfo from './component/WorkInfo.vue';
import Notice from './component/Notice.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/basicInfo',
        name: 'basicInfo',
        component: BasicInfo,
    },
    {
        path: '/eduInfo',
        name: 'eduInfo',
        component: EduInfo,
    },
    {
        path: '/workInfo',
        name: 'workInfo',
        component: WorkInfo,
    },
    {
        path: '/notice',
        name: 'notice',
        component: Notice,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
