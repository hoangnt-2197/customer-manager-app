import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router"
import Customers from './components/Customers.vue'
import About from './components/About.vue'

const routes = [
    {
        path: "/",
        name: "Customers",
        component: Customers,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});




createApp(App).use(router).mount('#app')
