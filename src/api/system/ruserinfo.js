import request from '@/myutil/request'

// 查询注册用户信息列表
export function listRuserinfo (data) {
  return request({
    url: '/sys/ruserinfo/list',
    method: 'post',
    data: data
  })
}

// 查询注册用户信息详细
export function getRuserinfo (id) {
  return request({
    url: '/sys/ruserinfo/' + id,
    method: 'get'
  })
}

// 新增注册用户信息
export function addRuserinfo (data) {
  return request({
    url: '/sys/ruserinfo',
    method: 'post',
    data: data
  })
}

// 修改注册用户信息
export function uptRuserinfo (data) {
  return request({
    url: '/sys/ruserinfo',
    method: 'put',
    data: data
  })
}

// 删除注册用户信息
export function delRuserinfo (ids) {
  return request({
    url: '/sys/ruserinfo/' + ids,
    method: 'delete'
  })
}

// 导出注册用户信息
export function exptRuserinfo (data) {
  return request({
    url: '/sys/ruserinfo/export',
    method: 'post',
    data: data
  })
}
