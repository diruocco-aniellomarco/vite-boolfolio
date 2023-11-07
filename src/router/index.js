import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/Portfolio.vue";
// import PostList from "./pages/PostList.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
  ],
});
export { router };
