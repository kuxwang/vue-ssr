import {
  createRouter as createVueRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "pages/home/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutView.vue"),
  },
];

export const createRouter = (type) =>
  createVueRouter({
    history: type === "client" ? createWebHistory() : createMemoryHistory(),
    routes,
  });
