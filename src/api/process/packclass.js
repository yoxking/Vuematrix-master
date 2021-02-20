import request from '@/myutil/request'

// 查询包装方式列表
export function listPackclass (data) {
  return request({
    url: '/process/packclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treePackclass () {
  return request({
    url: '/process/packclass/tree',
    method: 'get'
  })
}

// 查询包装方式详细
export function getPackclass (id) {
  return request({
    url: '/process/packclass/' + id,
    method: 'get'
  })
}

// 新增包装方式
export function addPackclass (data) {
  return request({
    url: '/process/packclass',
    method: 'post',
    data: data
  })
}

// 修改包装方式
export function uptPackclass (data) {
  return request({
    url: '/process/packclass',
    method: 'put',
    data: data
  })
}

// 删除包装方式
export function delPackclass (ids) {
  return request({
    url: '/process/packclass/' + ids,
    method: 'delete'
  })
}

// 导出包装方式
export function exptPackclass (data) {
  return request({
    url: '/process/packclass/export',
    method: 'post',
    data: data
  })
}
