import request from '@/myutil/request'

// 查询打印样式列表
export function listPrintstyle (data) {
  return request({
    url: '/process/printstyle/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treePrintstyle () {
  return request({
    url: '/process/printstyle/tree',
    method: 'get'
  })
}

// 查询打印样式详细
export function getPrintstyle (id) {
  return request({
    url: '/process/printstyle/' + id,
    method: 'get'
  })
}

// 新增打印样式
export function addPrintstyle (data) {
  return request({
    url: '/process/printstyle',
    method: 'post',
    data: data
  })
}

// 修改打印样式
export function uptPrintstyle (data) {
  return request({
    url: '/process/printstyle',
    method: 'put',
    data: data
  })
}

// 删除打印样式
export function delPrintstyle (ids) {
  return request({
    url: '/process/printstyle/' + ids,
    method: 'delete'
  })
}

// 导出打印样式
export function exptPrintstyle (data) {
  return request({
    url: '/process/printstyle/export',
    method: 'post',
    data: data
  })
}
