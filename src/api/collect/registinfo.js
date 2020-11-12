import request from '@/myutil/request'

// 查询预约信息列表
export function listRegistinfo (data) {
  return request({
    url: '/collect/registinfo/list',
    method: 'post',
    data: data
  })
}

// 查询预约信息详细
export function getRegistinfo (id) {
  return request({
    url: '/collect/registinfo/' + id,
    method: 'get'
  })
}

// 新增预约信息
export function addRegistinfo (data) {
  return request({
    url: '/collect/registinfo',
    method: 'post',
    data: data
  })
}

// 修改预约信息
export function uptRegistinfo (data) {
  return request({
    url: '/collect/registinfo',
    method: 'put',
    data: data
  })
}

// 删除预约信息
export function delRegistinfo (ids) {
  return request({
    url: '/collect/registinfo/' + ids,
    method: 'delete'
  })
}

// 导出预约信息
export function exptRegistinfo (data) {
  return request({
    url: '/collect/registinfo/export',
    method: 'post',
    data: data
  })
}
