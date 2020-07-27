import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/recommend"
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: () => import("../views/Recommend.vue")
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/Category.vue")
  },
  {
    path: "/rank",
    name: "Rank",
    component: () => import("../views/Rank.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
