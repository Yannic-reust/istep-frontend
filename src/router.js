import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home/Home.vue";
import Impressum from "./views/Impressum/Impressum.vue";
import BlogAlbanien from "./views/BlogAlbanien/BlogAlbanien.vue";
import Donate from "./views/Donate/Donate.vue";
import BlogPostAlbanien from "./views/BlogPostAlbanien/BlogPostAlbanien.vue";
import ElbasanACourse from "./views/ElbasanACourse/ElbasanACourse.vue";

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
  {
    path: "/Donate",
    name: "Donate",
    component: Donate,
  },
  {
    path: "/BlogAlbanien",
    name: "BlogAlbanien",
    component: BlogAlbanien,
  },
  {
    path: '/BlogAlbanien/:id',
    name: 'BlogPostAlbanien',
    component: BlogPostAlbanien,
},
  {
    path: '/ElbasanACourse',
    name: 'ElbasanACourse',
    component: ElbasanACourse,
}
];

const router = createRouter({
  history:createWebHistory(),

  routes,
});

export default router;
