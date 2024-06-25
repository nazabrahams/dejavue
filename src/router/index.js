import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from '@/views/CarsView.vue'
import FriendsView from '@/views/FriendsView.vue'
import ConsoleView from '@/views/ConsoleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Cars',
    name: 'Cars',
    component: CarsView
  },
  {
    path: '/Console',
    name: 'Console',
    component: ConsoleView
  },
  {
    path: '/Friends',
    name: 'Friends',
    component: FriendsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
