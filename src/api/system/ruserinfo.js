import request from '@/myutil/request'

// 查询注册用户信息列表
export function listRuserinfo (data) {
  return request({
    url: '/system/ruserinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeRuserinfo () {
  return request({
    url: '/system/ruserinfo/tree',
    method: 'get'
  })
}

// 查询注册用户信息详细
export function getRuserinfo (id) {
  return request({
    url: '/system/ruserinfo/' + id,
    method: 'get'
  })
}

// 新增注册用户信息
export function addRuserinfo (data) {
  return request({
    url: '/system/ruserinfo',
    method: 'post',
    data: data
  })
}

// 修改注册用户信息
export function uptRuserinfo (data) {
  return request({
    url: '/system/ruserinfo',
    method: 'put',
    data: data
  })
}

// 删除注册用户信息
export function delRuserinfo (ids) {
  return request({
    url: '/system/ruserinfo/' + ids,
    method: 'delete'
  })
}

// 导出注册用户信息
export function exptRuserinfo (data) {
  return request({
    url: '/system/ruserinfo/export',
    method: 'post',
    data: data
  })
}
