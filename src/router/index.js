import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/prototypes',
      name: 'prototypes',
      component: () => import('../views/ProrotypesView.vue'),
    },
    {
      path: '/arrayMethods',
      name: 'arrayMethods',
      component: () => import('../views/ArraysView.vue'),
    },
    {
      path: '/objects',
      name: 'objects',
      component: () => import('../views/ObjectsView.vue'),
    },
    {
      path: '/classes',
      name: 'classes',
      component: () => import('../views/ClassesView.vue'),
    },
    {
      path: '/promises',
      name: 'promises',
      component: () => import('../views/PromiseView.vue'),
    },
  ],
})

export default router
