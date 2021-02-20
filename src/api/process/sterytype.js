import request from '@/myutil/request'

// 查询灭菌方式列表
export function listSterytype (data) {
  return request({
    url: '/process/sterytype/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeSterytype () {
  return request({
    url: '/process/sterytype/tree',
    method: 'get'
  })
}

// 查询灭菌方式详细
export function getSterytype (id) {
  return request({
    url: '/process/sterytype/' + id,
    method: 'get'
  })
}

// 新增灭菌方式
export function addSterytype (data) {
  return request({
    url: '/process/sterytype',
    method: 'post',
    data: data
  })
}

// 修改灭菌方式
export function uptSterytype (data) {
  return request({
    url: '/process/sterytype',
    method: 'put',
    data: data
  })
}

// 删除灭菌方式
export function delSterytype (ids) {
  return request({
    url: '/process/sterytype/' + ids,
    method: 'delete'
  })
}

// 导出灭菌方式
export function exptSterytype (data) {
  return request({
    url: '/process/sterytype/export',
    method: 'post',
    data: data
  })
}
