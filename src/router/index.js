import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/Portfolio.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import ProjectTypePage from "../pages/ProjectTypePage.vue";

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
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetail,
    },
    {
      path: "/portfolio/type/:type_id",
      name: "project-type",
      component: ProjectTypePage,
    },
  ],
});
export { router };
