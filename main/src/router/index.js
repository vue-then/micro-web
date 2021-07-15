import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'base',
    component: App,
  },
  {
    path: '/vue3',
    name: 'vue3',
    component: App,
  },
  {
    path: '/react15',
    name: 'vue3',
    component: App,
  },
  {
    path: '/react16',
    name: 'vue3',
    component: App,
  },
  {
    path: '/vue2',
    name: 'vue3',
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
