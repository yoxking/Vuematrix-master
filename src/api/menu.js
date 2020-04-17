import request from '@/myutil/request'

// 获取路由
export function getRouters (parentId) {
  return request({
    url: '/sys/getRouters/' + parentId,
    method: 'get'
  })
}
