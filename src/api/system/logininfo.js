import request from '@/myutil/request'

// 查询系统访问记录列表
export function listLogininfo (data) {
  return request({
    url: '/system/logininfo/list',
    method: 'post',
    data: data
  })
}

// 查询系统访问记录详细
export function getLogininfo (id) {
  return request({
    url: '/system/logininfo/' + id,
    method: 'get'
  })
}

// 新增系统访问记录
export function addLogininfo (data) {
  return request({
    url: '/system/logininfo',
    method: 'post',
    data: data
  })
}

// 修改系统访问记录
export function uptLogininfo (data) {
  return request({
    url: '/system/logininfo',
    method: 'put',
    data: data
  })
}

// 删除系统访问记录
export function delLogininfo (ids) {
  return request({
    url: '/system/logininfo/' + ids,
    method: 'delete'
  })
}

// 导出系统访问记录
export function exptLogininfo (data) {
  return request({
    url: '/system/logininfo/export',
    method: 'post',
    data: data
  })
}
