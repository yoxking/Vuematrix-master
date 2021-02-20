import request from '@/myutil/request'

// 查询物品状态列表
export function listGoodstate (data) {
  return request({
    url: '/process/goodstate/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeGoodstate () {
  return request({
    url: '/process/goodstate/tree',
    method: 'get'
  })
}

// 查询物品状态详细
export function getGoodstate (id) {
  return request({
    url: '/process/goodstate/' + id,
    method: 'get'
  })
}

// 新增物品状态
export function addGoodstate (data) {
  return request({
    url: '/process/goodstate',
    method: 'post',
    data: data
  })
}

// 修改物品状态
export function uptGoodstate (data) {
  return request({
    url: '/process/goodstate',
    method: 'put',
    data: data
  })
}

// 删除物品状态
export function delGoodstate (ids) {
  return request({
    url: '/process/goodstate/' + ids,
    method: 'delete'
  })
}

// 导出物品状态
export function exptGoodstate (data) {
  return request({
    url: '/process/goodstate/export',
    method: 'post',
    data: data
  })
}
