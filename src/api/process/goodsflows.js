import request from '@/myutil/request'

// 查询物品操作列表
export function listGoodsflows (data) {
  return request({
    url: '/process/goodsflows/list',
    method: 'post',
    data: data
  })
}

// 查询物品操作详细
export function getGoodsflows (id) {
  return request({
    url: '/process/goodsflows/' + id,
    method: 'get'
  })
}

// 新增物品操作
export function addGoodsflows (data) {
  return request({
    url: '/process/goodsflows',
    method: 'post',
    data: data
  })
}

// 修改物品操作
export function uptGoodsflows (data) {
  return request({
    url: '/process/goodsflows',
    method: 'put',
    data: data
  })
}

// 删除物品操作
export function delGoodsflows (ids) {
  return request({
    url: '/process/goodsflows/' + ids,
    method: 'delete'
  })
}

// 导出物品操作
export function exptGoodsflows (data) {
  return request({
    url: '/process/goodsflows/export',
    method: 'post',
    data: data
  })
}

// 添加内部物品
export function insertInternal (ids) {
  return request({
    url: '/process/goodsflows/insertInternal',
    method: 'post',
    data: ids
  })
}

// 添加外部物品
export function insertExternal (ids) {
  return request({
    url: '/process/goodsflows/insertExternal',
    method: 'post',
    data: ids
  })
}

// 添加外部物品
export function saveSetting (data) {
  return request({
    url: '/process/goodsflows/saveSetting',
    method: 'post',
    data: data
  })
}
