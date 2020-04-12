import request from '@/myutil/request'

// 获取路由
export function getRouters (menuId) {
  return request({
    url: '/getRouters/' + menuId,
    method: 'get'
  })
}

// 获取顶部菜单信息
export function getTopMenu () {
  return request({
    url: '/getTopMenu',
    method: 'get'
  })
}
