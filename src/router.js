import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Formulario from "./components/Formulario/index.vue";
import Datos from "./components/Datos.vue";

const routes =[
    { path: '/', redirect: '/home' },
    
    { path: '/formulario', component: Formulario },
    { path: '/datos', component: Datos},
    { path: '/home', component: Home},

    { path: '/:pathmatch(.*)*', redirect: '/home' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router