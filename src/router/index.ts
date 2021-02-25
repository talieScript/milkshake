import { createWebHistory, createRouter } from 'vue-router';

export function loadView(view) {
  return () => import(`../views/${view}.vue`);
}
const routes = [
  { path: '/', component: loadView('Home') },
  { path: '/login', component: loadView('Login') },
  { path: '/register', component: loadView('Register') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
