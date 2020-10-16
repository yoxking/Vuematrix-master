import request from '@/myutil/request'

// 查询活动信息列表
export function listSalonsinfo (data) {
  return request({
    url: '/collect/salonsinfo/list',
    method: 'post',
    data: data
  })
}

// 查询活动信息详细
export function getSalonsinfo (id) {
  return request({
    url: '/collect/salonsinfo/' + id,
    method: 'get'
  })
}

// 新增活动信息
export function addSalonsinfo (data) {
  return request({
    url: '/collect/salonsinfo',
    method: 'post',
    data: data
  })
}

// 修改活动信息
export function uptSalonsinfo (data) {
  return request({
    url: '/collect/salonsinfo',
    method: 'put',
    data: data
  })
}

// 删除活动信息
export function delSalonsinfo (ids) {
  return request({
    url: '/collect/salonsinfo/' + ids,
    method: 'delete'
  })
}

// 导出活动信息
export function exptSalonsinfo (data) {
  return request({
    url: '/collect/salonsinfo/export',
    method: 'post',
    data: data
  })
}
