import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart/Cart.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/Category.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine/Mine.vue')
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import('@/views/Detail/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
