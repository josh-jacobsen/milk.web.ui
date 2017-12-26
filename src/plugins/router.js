import Vue from 'vue'
import VueRouter from 'vue-router'

// This async loading allows for lazy loading, so components are
// loaded only when the route is visited

const Category = () => import('../theme/Category.vue')
const Login = () => import('../theme/Login.vue')
const NotFound = () => import('../theme/NotFound.vue')

// TODO: add eslint for vue.js files
// TODO: add toastr for notifications

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/login', component: Login },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/', redirect: '/category/front-end' },
    { path: '*', component: NotFound }
  ]
})

export default router
