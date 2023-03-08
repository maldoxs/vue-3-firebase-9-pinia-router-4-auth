import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

const requireAuth = async (to, from, next) => {
    const useStore = useUserStore();
    useStore.loadingSesion = true;
    const user = await useStore.currentUser();

    if (user) {
        next();
    } else {
        next("/login");
    }
    useStore.loadingSesion = false;
};

const routes = [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

//inicializamos el createRouter y este recibe las rutas
const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
