import request from '@/myutil/request'

// 登录方法
export function getConfigInfo () {
  return request({
    url: '/web/getConfigInfo',
    method: 'get'
  })
}

// 退出方法
export function saveConfigInfo (data) {
  return request({
    url: '/web/saveConfigInfo',
    method: 'post',
    data: data
  })
}
