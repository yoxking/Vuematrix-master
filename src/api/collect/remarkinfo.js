import request from '@/myutil/request'

// 查询评论信息列表
export function listRemarkinfo (data) {
  return request({
    url: '/collect/remarkinfo/list',
    method: 'post',
    data: data
  })
}

// 查询评论信息详细
export function getRemarkinfo (id) {
  return request({
    url: '/collect/remarkinfo/' + id,
    method: 'get'
  })
}

// 新增评论信息
export function addRemarkinfo (data) {
  return request({
    url: '/collect/remarkinfo',
    method: 'post',
    data: data
  })
}

// 修改评论信息
export function uptRemarkinfo (data) {
  return request({
    url: '/collect/remarkinfo',
    method: 'put',
    data: data
  })
}

// 删除评论信息
export function delRemarkinfo (ids) {
  return request({
    url: '/collect/remarkinfo/' + ids,
    method: 'delete'
  })
}

// 导出评论信息
export function exptRemarkinfo (data) {
  return request({
    url: '/collect/remarkinfo/export',
    method: 'post',
    data: data
  })
}
