import request from '@/myutil/request'

// 查询清洗程序类型列表
export function listCleanclass (data) {
  return request({
    url: '/process/cleanclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeCleanclass () {
  return request({
    url: '/process/cleanclass/tree',
    method: 'get'
  })
}

// 查询清洗程序类型详细
export function getCleanclass (id) {
  return request({
    url: '/process/cleanclass/' + id,
    method: 'get'
  })
}

// 新增清洗程序类型
export function addCleanclass (data) {
  return request({
    url: '/process/cleanclass',
    method: 'post',
    data: data
  })
}

// 修改清洗程序类型
export function uptCleanclass (data) {
  return request({
    url: '/process/cleanclass',
    method: 'put',
    data: data
  })
}

// 删除清洗程序类型
export function delCleanclass (ids) {
  return request({
    url: '/process/cleanclass/' + ids,
    method: 'delete'
  })
}

// 导出清洗程序类型
export function exptCleanclass (data) {
  return request({
    url: '/process/cleanclass/export',
    method: 'post',
    data: data
  })
}
