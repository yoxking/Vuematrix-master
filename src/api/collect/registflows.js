import request from '@/myutil/request'

// 查询预约信息列表
export function listRegistflows (data) {
  return request({
    url: '/collect/registflows/list',
    method: 'post',
    data: data
  })
}

// 查询预约信息详细
export function getRegistflows (id) {
  return request({
    url: '/collect/registflows/' + id,
    method: 'get'
  })
}

// 新增预约信息
export function addRegistflows (data) {
  return request({
    url: '/collect/registflows',
    method: 'post',
    data: data
  })
}

// 修改预约信息
export function uptRegistflows (data) {
  return request({
    url: '/collect/registflows',
    method: 'put',
    data: data
  })
}

// 删除预约信息
export function delRegistflows (ids) {
  return request({
    url: '/collect/registflows/' + ids,
    method: 'delete'
  })
}

// 导出预约信息
export function exptRegistflows (data) {
  return request({
    url: '/collect/registflows/export',
    method: 'post',
    data: data
  })
}
