import request from '@/myutil/request'

// 查询清洗机次号列表
export function listCleantype (data) {
  return request({
    url: '/process/cleantype/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeCleantype () {
  return request({
    url: '/process/cleantype/tree',
    method: 'get'
  })
}

// 查询清洗机次号详细
export function getCleantype (id) {
  return request({
    url: '/process/cleantype/' + id,
    method: 'get'
  })
}

// 新增清洗机次号
export function addCleantype (data) {
  return request({
    url: '/process/cleantype',
    method: 'post',
    data: data
  })
}

// 修改清洗机次号
export function uptCleantype (data) {
  return request({
    url: '/process/cleantype',
    method: 'put',
    data: data
  })
}

// 删除清洗机次号
export function delCleantype (ids) {
  return request({
    url: '/process/cleantype/' + ids,
    method: 'delete'
  })
}

// 导出清洗机次号
export function exptCleantype (data) {
  return request({
    url: '/process/cleantype/export',
    method: 'post',
    data: data
  })
}
