import request from '@/myutil/request'

// 获取路由
export function getRouters (menuId) {
  return request({
    url: '/getRouters/' + menuId,
    method: 'get'
  })
}
