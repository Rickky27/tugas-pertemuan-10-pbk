import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPages.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
