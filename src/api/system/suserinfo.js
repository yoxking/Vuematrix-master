import request from '@/myutil/request'

// 查询系统用户信息列表
export function listSuserinfo (data) {
  return request({
    url: '/sys/suserinfo/list',
    method: 'post',
    data: data
  })
}

// 查询系统用户信息详细
export function getSuserinfo (id) {
  return request({
    url: '/sys/suserinfo/' + id,
    method: 'get'
  })
}

// 查询注册用户信息详细2
export function getSuserprofile () {
  return request({
    url: '/sys/suserinfo/profile?rand=' + Date.now(),
    method: 'get'
  })
}

// 用户头像上传
export function uploadAvatar (data) {
  return request({
    url: '/sys/suserinfo/uploadAvatar',
    method: 'post',
    data: data
  })
}

// 新增系统用户信息
export function addSuserinfo (data) {
  return request({
    url: '/sys/suserinfo',
    method: 'post',
    data: data
  })
}

// 修改系统用户信息
export function uptSuserinfo (data) {
  return request({
    url: '/sys/suserinfo',
    method: 'put',
    data: data
  })
}

// 修改系统用户信息
export function uptSuserpswd (oldPswd, newPswd) {
  const data = {
    oldPswd,
    newPswd
  }
  return request({
    url: '/sys/suserinfo/password',
    method: 'put',
    params: data
  })
}

// 删除系统用户信息
export function delSuserinfo (ids) {
  return request({
    url: '/sys/suserinfo/' + ids,
    method: 'delete'
  })
}

// 导出系统用户信息
export function exptSuserinfo (data) {
  return request({
    url: '/sys/suserinfo/export',
    method: 'post',
    data: data
  })
}

// 校验用户名是否重复
export function checkLoginName (name) {
  return request({
    url: '/sys/suserinfo/checkLoginName/' + name,
    method: 'get'
  })
}
