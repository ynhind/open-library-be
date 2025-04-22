import {createWebHistory, createRouter} from 'vue-router';
import MyHome from '../components/MyHome.vue';
import UserRegistration from '../components/UserRegistration.vue';
import UserLogin from '../components/UserLogin.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: MyHome
    },
    {
        name: 'Login',
        path: '/login',
        component: UserLogin
    },
    {
        name: 'Registration',
        path: '/registration',
        component: UserRegistration
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



