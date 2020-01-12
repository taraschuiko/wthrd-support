import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "form",
    component: Form
  },
  {
    path: "/success",
    name: "success",
    component: Success
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
