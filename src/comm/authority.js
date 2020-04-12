import router from '../router'
import store from '../stores'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/myutil/cookie'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/forgetpwd']

// 访问权限控制切入
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    /* has token */
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.state.suser.permits.length === 0) {
        // 拉取user_info
        store.dispatch('suser/GetInfo').then(res => {
          // 根据父菜单生成可访问的路由表
          store.dispatch('menus/GenertTopMenu').then(() => {
            if (store.state.menus.tMenuChanged) {
            // 根据父菜单生成可访问的路由表
              store.dispatch('menus/GenertRoutes', store.state.menus.tMenuIndexNo).then(accessRoutes => {
                router.options.routes = []
                router.options.routes = store.state.menus.routes
                router.addRoutes(accessRoutes) // 动态添加可访问路由表
                store.dispatch('menus/TopMenuChanged', false)
                next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
              })
            }
          })
        })
          .catch(e => {
            store.dispatch('suser/FedLogout').then(() => {
              next({ path: '/' })
            })
          })
      } else {
        if (store.state.menus.tMenuChanged) {
          // 根据父菜单生成可访问的路由表
          store.dispatch('menus/GenertRoutes', store.state.menus.tMenuIndexNo).then(accessRoutes => {
            router.options.routes = []
            router.options.routes = store.state.menus.routes
            router.addRoutes(accessRoutes) // 动态添加可访问路由表
            store.dispatch('menus/TopMenuChanged', false)
            console.log(router)
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        } else {
          next()
        }
      }
    }
  } else {
    // 没有token
    // 在免登录白名单，直接进入
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
