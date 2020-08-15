import { constRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import MenuView from '@/layouts/MenuView'
import PageView from '@/layouts/PageView'

const menus = {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constRoutes.concat(routes)
    }
  },
  actions: {
    // 生成路由
    GenertRoutes ({ commit }, parentId) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters(parentId).then(res => {
          const accessedRoutes = filterAsyncRouter(res.data)
          accessedRoutes.push({ path: '*', redirect: '/', invisible: true })
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter (asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'MenuView') {
        route.component = MenuView
      } else if (route.component === 'PageView') {
        route.component = PageView
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

export const loadView = (view) => { // 路由懒加载
  return () => import(`@/pages/${view}`)
}

export default menus
