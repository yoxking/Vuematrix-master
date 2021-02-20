import request from '@/myutil/request'

// 查询物品包类型列表
export function listGoodsclass (data) {
  return request({
    url: '/process/goodsclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeGoodsclass () {
  return request({
    url: '/process/goodsclass/tree',
    method: 'get'
  })
}

// 查询物品包类型详细
export function getGoodsclass (id) {
  return request({
    url: '/process/goodsclass/' + id,
    method: 'get'
  })
}

// 新增物品包类型
export function addGoodsclass (data) {
  return request({
    url: '/process/goodsclass',
    method: 'post',
    data: data
  })
}

// 修改物品包类型
export function uptGoodsclass (data) {
  return request({
    url: '/process/goodsclass',
    method: 'put',
    data: data
  })
}

// 删除物品包类型
export function delGoodsclass (ids) {
  return request({
    url: '/process/goodsclass/' + ids,
    method: 'delete'
  })
}

// 导出物品包类型
export function exptGoodsclass (data) {
  return request({
    url: '/process/goodsclass/export',
    method: 'post',
    data: data
  })
}
