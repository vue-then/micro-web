import Vue from 'vue';
import VueRouter from 'vue-router';
import Energy from '../views/energy/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/energy',
    name: 'energy',
    component: Energy,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
