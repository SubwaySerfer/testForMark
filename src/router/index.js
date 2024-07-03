import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue'
import TestPage from '../pages/test.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
      // path: "/",
      // redirect: '/home',
      // name: "home",
      // component: HomePage,
    // },
    {
      path: "/",
      name: "home",
      component: TestPage
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomePage,
    // },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 100);
    });
  },
});
export default router;
