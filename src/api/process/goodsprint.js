import request from '@/myutil/request'

// 查询物品包信息列表
export function listGoodsprint (data) {
  return request({
    url: '/process/goodsprint/list',
    method: 'post',
    data: data
  })
}

// 查询物品包信息详细
export function getGoodsprint (id) {
  return request({
    url: '/process/goodsprint/' + id,
    method: 'get'
  })
}

// 导出物品包信息
export function exptGoodsprint (data) {
  return request({
    url: '/process/goodsprint/export',
    method: 'post',
    data: data
  })
}
