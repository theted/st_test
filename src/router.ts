import { createRouter, createWebHistory } from "vue-router";
import Users from "./views/Users.vue";
import Create from "./views/Create.vue";
import Edit from "./views/Edit.vue"; // TODO: duplicated logic, fix!

const routes = [
  { path: "/", component: Users },
  { path: "/create", component: Create },
  { path: "/edit/:id", component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
