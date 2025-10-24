import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import AboutUs from "./pages/AboutUs.vue";
import "@fortawesome/fontawesome-free";

const routes = [
    { path: "/", component: Home },
    { path: "/aboutus", component: AboutUs }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
