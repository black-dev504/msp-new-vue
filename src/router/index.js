import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/landing/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import K12 from '@/views/K12.vue'
import Tertiary from '@/views/Tertiary.vue'
import Pricing from '@/views/pricing/Pricing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/K12',
      name: 'K12',
      component: K12,
    },
    {
      path: '/tertiary',
      name: 'Tertiary',
      component: Tertiary,
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
    },
  ],
})

export default router
