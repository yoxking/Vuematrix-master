import request from '@/myutil/request'

// 查询工作组列表
export function listWorkgroup (data) {
  return request({
    url: '/flow/workgroup/list',
    method: 'post',
    data: data
  })
}

// 查询工作组详细
export function getWorkgroup (id) {
  return request({
    url: '/flow/workgroup/' + id,
    method: 'get'
  })
}

// 新增工作组
export function addWorkgroup (data) {
  return request({
    url: '/flow/workgroup',
    method: 'post',
    data: data
  })
}

// 修改工作组
export function uptWorkgroup (data) {
  return request({
    url: '/flow/workgroup',
    method: 'put',
    data: data
  })
}

// 删除工作组
export function delWorkgroup (ids) {
  return request({
    url: '/flow/workgroup/' + ids,
    method: 'delete'
  })
}

// 导出工作组
export function exptWorkgroup (data) {
  return request({
    url: '/flow/workgroup/export',
    method: 'post',
    data: data
  })
}
