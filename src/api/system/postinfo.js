import request from '@/myutil/request'

// 查询岗位信息列表
export function listPostinfo (data) {
  return request({
    url: '/sys/postinfo/list',
    method: 'post',
    data: data
  })
}

// 查询岗位信息详细
export function getPostinfo (id) {
  return request({
    url: '/sys/postinfo/' + id,
    method: 'get'
  })
}

// 新增岗位信息
export function addPostinfo (data) {
  return request({
    url: '/sys/postinfo',
    method: 'post',
    data: data
  })
}

// 修改岗位信息
export function uptPostinfo (data) {
  return request({
    url: '/sys/postinfo',
    method: 'put',
    data: data
  })
}

// 删除岗位信息
export function delPostinfo (ids) {
  return request({
    url: '/sys/postinfo/' + ids,
    method: 'delete'
  })
}

// 导出岗位信息
export function exptPostinfo (data) {
  return request({
    url: '/sys/postinfo/export',
    method: 'post',
    data: data
  })
}
