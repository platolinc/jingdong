import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView'
import LoginView from '../views/login/LoginView'
import RegisterView from '../views/register/RegisterView'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    beforeEnter (to, from, next) { // 每一个路由都可以加这个函数，在进入到此路由之前被执行
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'HomeView' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    beforeEnter (to, from, next) { // 每一个路由都可以加这个函数，在进入到此路由之前被执行
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'HomeView' })
      } else {
        next()
      }
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => { // 每次做路由跳转之前都会执行router的这个方法
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'LoginView' || name === 'RegisterView')
  if (isLogin || isLoginOrRegister) {
    next()
  } else {
    next({ name: 'LoginView' })
  }
  next()
})
export default router
