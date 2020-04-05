import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
// import RouteView from '@/layouts/RouteView'
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
  },
  {
    path: '/',
    name: '主控制台',
    component: MenuView,
    redirect: '/login',
    icon: 'none',
    invisible: true,
    children: [
      {
        path: '/account',
        name: '基本信息',
        component: PageView,
        redirect: '/account/userprofile',
        icon: 'dashboard',
        invisible: true,
        children: [
          {
            path: '/account/userprofile',
            name: '个人中心',
            component: () => import('@/pages/sysuser/UserProfile'),
            invisible: true
          },
          {
            path: '/account/resetpwd',
            name: '设置密码',
            component: () => import('@/pages/sysuser/ResetPwd'),
            invisible: true
          },
          {
            path: '/account/syssetting',
            name: '基本设置',
            component: () => import('@/pages/sysuser/SysSetting'),
            invisible: true
          }
        ]
      },
      {
        path: '/home',
        name: '工作台',
        component: PageView,
        redirect: '/home/index',
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
        redirect: '/system/config',
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
            path: '/system/ruser',
            name: '用户信息',
            component: () => import('@/pages/system/ruser/Index'),
            icon: 'none'
          },
          {
            path: '/system/suser',
            name: '管理员信息',
            component: () => import('@/pages/system/suser/Index'),
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
        redirect: '/monitor/druids',
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
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

export default new Router({
  routes: constRoutes
})
