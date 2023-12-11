import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home/Home.vue";
import Impressum from "./views/Impressum/Impressum.vue";
import BlogAlbanien from "./views/BlogAlbanien/BlogAlbanien.vue";
import Blog from "./views/BlogDetail/BlogDetail.vue";
import Donate from "./views/Donate/Donate.vue";
import ElbasanACourse from "./views/ElbasanACourse/ElbasanACourse.vue";
import Offer from "./views/Angebot/Angebot.vue";

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
    path: '/elbasanACourse',
    name: 'ElbasanACourse',
    component: ElbasanACourse,
},
  {
    path: '/BlogAlbanien/detailBlog',
    name: 'Blog',
    component: Blog,
},
  {
    path: '/offer',
    name: 'Offer',
    component: Offer,
}
];

const router = createRouter({
  history:createWebHistory(),

  routes,
});

export default router;
