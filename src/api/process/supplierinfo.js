import request from '@/myutil/request'

// 查询供应商信息列表
export function listSupplierinfo (data) {
  return request({
    url: '/process/supplierinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeSupplierinfo () {
  return request({
    url: '/process/supplierinfo/tree',
    method: 'get'
  })
}

// 查询供应商信息详细
export function getSupplierinfo (id) {
  return request({
    url: '/process/supplierinfo/' + id,
    method: 'get'
  })
}

// 新增供应商信息
export function addSupplierinfo (data) {
  return request({
    url: '/process/supplierinfo',
    method: 'post',
    data: data
  })
}

// 修改供应商信息
export function uptSupplierinfo (data) {
  return request({
    url: '/process/supplierinfo',
    method: 'put',
    data: data
  })
}

// 删除供应商信息
export function delSupplierinfo (ids) {
  return request({
    url: '/process/supplierinfo/' + ids,
    method: 'delete'
  })
}

// 导出供应商信息
export function exptSupplierinfo (data) {
  return request({
    url: '/process/supplierinfo/export',
    method: 'post',
    data: data
  })
}
