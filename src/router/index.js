import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import yeLogin from '../views/yeLogin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: yeLogin
  },
  {
    path: '/home',
    name: 'home',    
    component: HomeView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
