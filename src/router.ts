import { createRouter, createWebHistory } from "vue-router";
import Users from "./views/Users.vue";
import Create from "./views/Create.vue";

const routes = [
  { path: "/", component: Users },
  { path: "/create", component: Create },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
