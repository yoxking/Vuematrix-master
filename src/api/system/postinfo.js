import request from '@/myutil/request'

// 查询岗位信息列表
export function listPostinfo (data) {
  return request({
    url: '/system/postinfo/list',
    method: 'post',
    data: data
  })
}

// 查询岗位信息详细
export function getPostinfo (id) {
  return request({
    url: '/system/postinfo/' + id,
    method: 'get'
  })
}

// 新增岗位信息
export function addPostinfo (data) {
  return request({
    url: '/system/postinfo',
    method: 'post',
    data: data
  })
}

// 修改岗位信息
export function uptPostinfo (data) {
  return request({
    url: '/system/postinfo',
    method: 'put',
    data: data
  })
}

// 删除岗位信息
export function delPostinfo (ids) {
  return request({
    url: '/system/postinfo/' + ids,
    method: 'delete'
  })
}

// 导出岗位信息
export function exptPostinfo (data) {
  return request({
    url: '/system/postinfo/export',
    method: 'post',
    data: data
  })
}
