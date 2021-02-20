import request from '@/myutil/request'

// 查询灭菌程序/类型列表
export function listSteryclass (data) {
  return request({
    url: '/process/steryclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeSteryclass () {
  return request({
    url: '/process/steryclass/tree',
    method: 'get'
  })
}

// 查询灭菌程序/类型详细
export function getSteryclass (id) {
  return request({
    url: '/process/steryclass/' + id,
    method: 'get'
  })
}

// 新增灭菌程序/类型
export function addSteryclass (data) {
  return request({
    url: '/process/steryclass',
    method: 'post',
    data: data
  })
}

// 修改灭菌程序/类型
export function uptSteryclass (data) {
  return request({
    url: '/process/steryclass',
    method: 'put',
    data: data
  })
}

// 删除灭菌程序/类型
export function delSteryclass (ids) {
  return request({
    url: '/process/steryclass/' + ids,
    method: 'delete'
  })
}

// 导出灭菌程序/类型
export function exptSteryclass (data) {
  return request({
    url: '/process/steryclass/export',
    method: 'post',
    data: data
  })
}
