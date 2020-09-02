import request from '@/myutil/request'

// 查询应用类型列表
export function listRenteclass (data) {
  return request({
    url: '/system/renteclass/list',
    method: 'post',
    data: data
  })
}

// 查询应用类型树结构
export function treeRenteclass () {
  return request({
    url: '/system/renteclass/tree',
    method: 'get'
  })
}

// 查询应用类型详细
export function getRenteclass (id) {
  return request({
    url: '/system/renteclass/' + id,
    method: 'get'
  })
}

// 新增应用类型
export function addRenteclass (data) {
  return request({
    url: '/system/renteclass',
    method: 'post',
    data: data
  })
}

// 修改应用类型
export function uptRenteclass (data) {
  return request({
    url: '/system/renteclass',
    method: 'put',
    data: data
  })
}

// 删除应用类型
export function delRenteclass (ids) {
  return request({
    url: '/system/renteclass/' + ids,
    method: 'delete'
  })
}

// 导出应用类型
export function exptRenteclass (data) {
  return request({
    url: '/system/renteclass/export',
    method: 'post',
    data: data
  })
}
