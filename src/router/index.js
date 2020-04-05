import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import Login from '@/pages/login/Index'

Vue.use(Router)

// 公共路由
export const constRoutes = [
  {
    path: '/login',
    name: '登录页',
    component: Login,
    invisible: true
  },
  {
    path: '/',
    name: '首页',
    component: MenuView,
    redirect: '/login',
    icon: 'none',
    invisible: true,
    children: [
      {
        path: '/home',
        name: '工作台',
        component: RouteView,
        icon: 'dashboard',
        children: [
          {
            path: '/home/index',
            name: '首页',
            component: () => import('@/pages/home/Index'),
            icon: 'none'
          }
        ]
      },
      {
        path: '/system',
        name: '系统管理',
        component: PageView,
        icon: 'form',
        children: [
          {
            path: '/system/config',
            name: '系统配置',
            component: () => import('@/pages/system/config/Index'),
            icon: 'none'
          },
          {
            path: '/system/dept',
            name: '部门信息',
            component: () => import('@/pages/system/dept/Index'),
            icon: 'none'
          },
          {
            path: '/system/dicts',
            name: '字典信息',
            component: () => import('@/pages/system/dicts/Index'),
            icon: 'none'
          },
          {
            path: '/system/post',
            name: '岗位信息',
            component: () => import('@/pages/system/post/Index'),
            icon: 'none'
          },
          {
            path: '/system/user',
            name: '用户信息',
            component: () => import('@/pages/system/user/Index'),
            icon: 'none'
          },
          {
            path: '/system/role',
            name: '角色信息',
            component: () => import('@/pages/system/role/Index'),
            icon: 'none'
          },
          {
            path: '/system/permit',
            name: '权限信息',
            component: () => import('@/pages/system/permit/Index'),
            icon: 'none'
          }
        ]
      },
      {
        path: '/monitor',
        name: '系统监控',
        component: PageView,
        icon: 'form',
        children: [
          {
            path: '/monitor/druids',
            name: '数据监控',
            component: () => import('@/pages/monitor/druids/Index'),
            icon: 'none'
          },
          {
            path: '/monitor/tasker',
            name: '定时任务',
            component: () => import('@/pages/monitor/tasker/Index'),
            icon: 'none'
          },
          {
            path: '/monitor/logfor',
            name: '用户登录',
            component: () => import('@/pages/monitor/logfor/Index'),
            icon: 'none'
          },
          {
            path: '/monitor/server',
            name: '服务监控',
            component: () => import('@/pages/monitor/server/Index'),
            icon: 'none'
          },
          {
            path: '/monitor/oplog',
            name: '操作日志',
            component: () => import('@/pages/monitor/oplog/Index'),
            icon: 'none'
          }
        ]
      },
      {
        path: '/systool',
        name: '系统工具',
        component: PageView,
        icon: 'form',
        children: [
          {
            path: '/systool/gencode',
            name: '代码生成',
            component: () => import('@/pages/systool/gencode/Index'),
            icon: 'none'
          },
          {
            path: '/systool/dept',
            name: '系统接口',
            component: () => import('@/pages/systool/swaggers/Index'),
            icon: 'none'
          }
        ]
      }
    ]
  }
]

export default new Router({
  routes: constRoutes
})
