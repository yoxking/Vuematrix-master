import request from '@/myutil/request'

// 查询应用信息列表
export function listRenterinfo (data) {
  return request({
    url: '/system/renterinfo/list',
    method: 'post',
    data: data
  })
}

// 查询应用信息详细
export function getRenterinfo (id) {
  return request({
    url: '/system/renterinfo/' + id,
    method: 'get'
  })
}

// 新增应用信息
export function addRenterinfo (data) {
  return request({
    url: '/system/renterinfo',
    method: 'post',
    data: data
  })
}

// 修改应用信息
export function uptRenterinfo (data) {
  return request({
    url: '/system/renterinfo',
    method: 'put',
    data: data
  })
}

// 删除应用信息
export function delRenterinfo (ids) {
  return request({
    url: '/system/renterinfo/' + ids,
    method: 'delete'
  })
}

// 导出应用信息
export function exptRenterinfo (data) {
  return request({
    url: '/system/renterinfo/export',
    method: 'post',
    data: data
  })
}

// 初始化信息
export function InitalRenter (data) {
  return request({
    url: '/system/renterinfo/initialize',
    method: 'post',
    data: data
  })
}
