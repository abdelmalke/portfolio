import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Projects from '../views/Projects.vue';
import About from '../views/AboutView.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;