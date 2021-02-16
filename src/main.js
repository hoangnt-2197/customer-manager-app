import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import vueResource from 'vue-resource'
import Customers from './components/Customers.vue';
import About from './components/About.vue';


 const router = new VueRouter({
     mode: "history",
     base: __dirname,
     routes: [
         {path:'/', component: Customers},
         {path:'/about', component: About}
     ]
 });
 
 createApp(App, router).use(VueRouter).use(vueResource).mount('#app')

//  {
//     router,
//     template: `
//     <div id ="app">
//     <router-link to="/about">About</router-link>
//     <router-view></router-view>
//     </div>
//     `
// }