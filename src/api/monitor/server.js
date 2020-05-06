import request from '@/myutil/request'

// 查询服务器详细
export function getServerinfo () {
  return request({
    url: '/web/getServerInfo',
    method: 'get'
  })
}
