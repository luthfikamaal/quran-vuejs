import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/surah/:surah',
    name: 'surah',
    component: () => import('../views/Surah.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
