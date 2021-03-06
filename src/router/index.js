import Vue from 'vue'
import Router from 'vue-router'
// import PageView from '@/layouts/PageView'
// import RouteView from '@/layouts/RouteView'
// import MenuView from '@/layouts/MenuView'
import Login from '@/pages/login/Index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// 公共路由
export const constRoutes = [
  {
    path: '/login',
    name: '登录页',
    component: Login,
    invisible: true
  },
  {
    path: '/forgetpwd',
    name: '找回密码',
    component: () => import('@/pages/sysuser/ForgetPwd'),
    invisible: true
  },
  {
    path: '/success',
    name: '成功',
    component: () => import('@/pages/results/Success'),
    invisible: true
  },
  {
    path: '/failure',
    name: '失败',
    component: () => import('@/pages/results/Failure'),
    invisible: true
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/pages/errors/403'),
    invisible: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/errors/404'),
    invisible: true
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/pages/errors/500'),
    invisible: true
  }
]

const router = new Router({
  routes: constRoutes
})

router.$addRoutes = (routeData) => {
  // 清空路由
  router.matcher = new Router({routes: constRoutes}).matcher
  // 添加路由
  router.addRoutes(routeData)
}
export default router
