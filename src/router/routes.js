export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/items/:itemAlias",
    name: "itemAlias",
    component: () => import("@/views/Card.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];
