import request from '@/myutil/request'

// 查询库房信息列表
export function listStoreinfo (data) {
  return request({
    url: '/process/storeinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeStoreinfo () {
  return request({
    url: '/process/storeinfo/tree',
    method: 'get'
  })
}

// 查询库房信息详细
export function getStoreinfo (id) {
  return request({
    url: '/process/storeinfo/' + id,
    method: 'get'
  })
}

// 新增库房信息
export function addStoreinfo (data) {
  return request({
    url: '/process/storeinfo',
    method: 'post',
    data: data
  })
}

// 修改库房信息
export function uptStoreinfo (data) {
  return request({
    url: '/process/storeinfo',
    method: 'put',
    data: data
  })
}

// 删除库房信息
export function delStoreinfo (ids) {
  return request({
    url: '/process/storeinfo/' + ids,
    method: 'delete'
  })
}

// 导出库房信息
export function exptStoreinfo (data) {
  return request({
    url: '/process/storeinfo/export',
    method: 'post',
    data: data
  })
}
