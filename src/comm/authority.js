import router from '../router'
import stores from '../stores'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/myutil/cookie'
import { getTopMenus } from '@/api/menu'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/forgetpwd']

// 访问权限控制切入
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    /* has token */
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (stores.state.suser.permits.length === 0) {
        // 拉取user_info
        stores.dispatch('suser/GetInfo').then(res => {
          getTopMenus().then(response => {
            if (response.code === 200 && response.data != null && response.data.length > 0) {
              let parentNo = response.data[0].no
              // 根据父菜单生成可访问的路由表
              stores.dispatch('menus/GenertRoutes', parentNo).then(accessRoutes => {
                router.options.routes = []
                router.options.routes = stores.state.menus.routes
                // router.addRoutes(accessRoutes) // 动态添加可访问路由表
                router.$addRoutes(accessRoutes)

                next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
              })
            }
          })
        })
          .catch(e => {
            stores.dispatch('suser/FedLogout').then(() => {
              next({ path: '/' })
            })
          })
      } else {
        next()
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
