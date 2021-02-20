import request from '@/myutil/request'

// 查询库存信息列表
export function listStockinfo (data) {
  return request({
    url: '/process/stockinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeStockinfo (val) {
  return request({
    url: '/process/stockinfo/tree?equipType=' + val,
    method: 'get'
  })
}

// 查询库存信息详细
export function getStockinfo (id) {
  return request({
    url: '/process/stockinfo/' + id,
    method: 'get'
  })
}

// 新增库存信息
export function addStockinfo (data) {
  return request({
    url: '/process/stockinfo',
    method: 'post',
    data: data
  })
}

// 修改库存信息
export function uptStockinfo (data) {
  return request({
    url: '/process/stockinfo',
    method: 'put',
    data: data
  })
}

// 删除库存信息
export function delStockinfo (ids) {
  return request({
    url: '/process/stockinfo/' + ids,
    method: 'delete'
  })
}

// 导出库存信息
export function exptStockinfo (data) {
  return request({
    url: '/process/stockinfo/export',
    method: 'post',
    data: data
  })
}

// 入库库存信息
export function inboundStock (data) {
  return request({
    url: '/process/stockinfo/inbound',
    method: 'post',
    data: data
  })
}

// 出库库存信息
export function outboundStock (data) {
  return request({
    url: '/process/stockinfo/outbound',
    method: 'post',
    data: data
  })
}

// 查询库存信息详细
export function getStockinfo2 (id) {
  return request({
    url: '/process/stockinfo/info/' + id,
    method: 'get'
  })
}
