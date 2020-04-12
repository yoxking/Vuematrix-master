import { constRoutes } from '@/router'
import { getRouters, getTopMenu } from '@/api/menu'
import MenuView from '@/layouts/MenuView'
import PageView from '@/layouts/PageView'

const menus = {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: [],
    tMenuList: [],
    tMenuIndexNo: '0',
    tMenuChanged: false
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constRoutes.concat(routes)
    },
    SET_TMENULIST: (state, tMenuList) => {
      state.tMenuList = tMenuList
    },
    SET_TMENUINDEXNO: (state, tMenuIndexNo) => {
      state.tMenuIndexNo = tMenuIndexNo
    },
    SET_TMENUCHANGED: (state, tMenuChanged) => {
      state.tMenuChanged = tMenuChanged
    }
  },
  actions: {
    // 生成路由
    GenertRoutes ({ commit }, menuId) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters(menuId).then(res => {
          const accessedRoutes = filterAsyncRouter(res.data)
          // accessedRoutes.push({ path: '*', redirect: '/404', invisible: true })
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      })
    },
    GenertTopMenu ({commit}) {
      return new Promise((resolve, reject) => {
        // 向后端请求路由数据
        getTopMenu().then(res => {
          commit('SET_TMENULIST', res.data)
          commit('SET_TMENUINDEXNO', res.data[0].no)
          commit('SET_TMENUCHANGED', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    TopMenuIndexNo ({commit}, value) {
      commit('SET_TMENUINDEXNO', value)
    },
    TopMenuChanged ({commit}, value) {
      commit('SET_TMENUCHANGED', value)
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
