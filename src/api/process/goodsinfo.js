import request from '@/myutil/request'

// 查询物品包信息列表
export function listGoodsinfo (data) {
  return request({
    url: '/process/goodsinfo/list',
    method: 'post',
    data: data
  })
}

// 查询物品包信息详细
export function getGoodsinfo (id) {
  return request({
    url: '/process/goodsinfo/' + id,
    method: 'get'
  })
}

// 新增物品包信息
export function addGoodsinfo (data) {
  return request({
    url: '/process/goodsinfo',
    method: 'post',
    data: data
  })
}

// 修改物品包信息
export function uptGoodsinfo (data) {
  return request({
    url: '/process/goodsinfo',
    method: 'put',
    data: data
  })
}

// 删除物品包信息
export function delGoodsinfo (ids) {
  return request({
    url: '/process/goodsinfo/' + ids,
    method: 'delete'
  })
}

// 导出物品包信息
export function exptGoodsinfo (data) {
  return request({
    url: '/process/goodsinfo/export',
    method: 'post',
    data: data
  })
}
