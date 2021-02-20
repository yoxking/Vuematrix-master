import request from '@/myutil/request'

// 查询系统类型列表
export function listGoodstype (data) {
  return request({
    url: '/process/goodstype/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeGoodstype () {
  return request({
    url: '/process/goodstype/tree',
    method: 'get'
  })
}

// 查询系统类型详细
export function getGoodstype (id) {
  return request({
    url: '/process/goodstype/' + id,
    method: 'get'
  })
}

// 新增系统类型
export function addGoodstype (data) {
  return request({
    url: '/process/goodstype',
    method: 'post',
    data: data
  })
}

// 修改系统类型
export function uptGoodstype (data) {
  return request({
    url: '/process/goodstype',
    method: 'put',
    data: data
  })
}

// 删除系统类型
export function delGoodstype (ids) {
  return request({
    url: '/process/goodstype/' + ids,
    method: 'delete'
  })
}

// 导出系统类型
export function exptGoodstype (data) {
  return request({
    url: '/process/goodstype/export',
    method: 'post',
    data: data
  })
}
