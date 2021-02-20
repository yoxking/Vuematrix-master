import request from '@/myutil/request'

// 查询出入库操作列表
export function listStockflows (data) {
  return request({
    url: '/process/stockflows/list',
    method: 'post',
    data: data
  })
}

// 查询出入库操作详细
export function getStockflows (id) {
  return request({
    url: '/process/stockflows/' + id,
    method: 'get'
  })
}

// 新增出入库操作
export function addStockflows (data) {
  return request({
    url: '/process/stockflows',
    method: 'post',
    data: data
  })
}

// 修改出入库操作
export function uptStockflows (data) {
  return request({
    url: '/process/stockflows',
    method: 'put',
    data: data
  })
}

// 删除出入库操作
export function delStockflows (ids) {
  return request({
    url: '/process/stockflows/' + ids,
    method: 'delete'
  })
}

// 导出出入库操作
export function exptStockflows (data) {
  return request({
    url: '/process/stockflows/export',
    method: 'post',
    data: data
  })
}
