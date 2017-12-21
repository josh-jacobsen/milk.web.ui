import Vue from 'vue'
import VueRouter from 'vue-router'

// this is a comment to see if I can push from work laptop

// Normal import statements are dispensed with to all for lazy loading
// import Category from '../theme/Category.vue'
// import Login from '../theme/Login.vue'
// import NotFound from '../theme/NotFound.vue'

// This async loading allows for lazy loading, so components are
// loaded only when the route is visitedn
// These ones do't work with windows
// const Category = () => System.import('../theme/Category.vue')
// const Login = () => System.import('../theme/Login.vue')
// const NotFound = () => System.import('../theme/NotFound.vue')

// These async loading patterns work on windows
const Category = () => import('../theme/Category.vue')
const Login = () => import('../theme/Login.vue')
const NotFound = () => import('../theme/NotFound.vue')

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
