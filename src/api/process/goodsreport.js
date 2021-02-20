import request from '@/myutil/request'

// 查询物品包信息列表
export function listGoodsreport (data) {
  return request({
    url: '/process/goodsreport/list',
    method: 'post',
    data: data
  })
}

// 查询物品包信息详细
export function getGoodsreport (id) {
  return request({
    url: '/process/goodsreport/' + id,
    method: 'get'
  })
}

// 导出物品包信息
export function exptGoodsreport (data) {
  return request({
    url: '/process/goodsreport/export',
    method: 'post',
    data: data
  })
}
