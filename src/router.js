import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home/Home.vue";
import Impressum from "./views/Impressum/Impressum.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Impressum",
    name: "Impressum",
    component: Impressum,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
