import request from '@/myutil/request'

// 登录方法
export function login (username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/web/login',
    method: 'post',
    params: data
  })
}

// 退出方法
export function logout () {
  return request({
    url: '/web/logout',
    method: 'post'
  })
}

// 获取用户详细信息
export function getInfo () {
  return request({
    url: '/web/getInfo',
    method: 'get'
  })
}

// 获取验证码
export function getCodeImg () {
  return request({
    url: '/web/codeImage',
    method: 'get'
  })
}
