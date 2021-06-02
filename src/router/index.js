import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bmi',
    name: 'Bmi',
    component: () => import(/* webpackChunkName: "bmi" */ '../views/Bmi.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "bmi" */ '../views/Dialog.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/Todo.vue')
  },
  {
    path: '/todo-advanced',
    name: 'TodoAdvanced',
    component: () => import(/* webpackChunkName: "todoadvanced" */ '../views/TodoAdvanced.vue')
  },
  {
    path: '/todo-example',
    name: 'TodoExample',
    component: () => import(/* webpackChunkName: "todoexample" */ '../views/TodoExample.vue')
  },
  {
    path: '/covid',
    name: 'Covid',
    component: () => import(/* webpackChunkName: "covid" */ '../views/Covid.vue')
  },
  {
    path: '/masks',
    name: 'Masks',
    component: () => import(/* webpackChunkName: "masks" */ '../views/Masks.vue')
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
