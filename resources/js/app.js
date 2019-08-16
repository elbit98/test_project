import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import FlagIcon from 'vue-flag-icon'
import Permissions from './mixins/Permissions';

import App from './App.vue';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

import CreateCompany from './components/Company/CreateCompany.vue';

Vue.mixin(Permissions);


Vue.use(FlagIcon);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://tm.loc/api';

const router = new VueRouter({

    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/register', name: 'register', component: Register, meta: {auth: false}},
        {path: '/login', name: 'login', component: Login, meta: {auth: false}},
        {path: '/dashboard', name: 'dashboard', component: Dashboard, meta: {auth: true}},
        {path: '/create-company', name: 'createCompany', component: CreateCompany, meta: {auth: true}},
        {path: '/show/:id/company', name: 'showCompany', component: ShowCompany, meta: {auth: true}},
        {path: '/edit/:id/company', name: 'editCompany', component: EditCompany, meta: {auth: true}},
    ]
});
Vue.router = router;

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

App.router = Vue.router;
new Vue(App).$mount('#app');