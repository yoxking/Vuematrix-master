import request from '@/myutil/request'

// 查询打印机信息列表
export function listPrintsinfo (data) {
  return request({
    url: '/process/printsinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treePrintsinfo () {
  return request({
    url: '/process/printsinfo/tree',
    method: 'get'
  })
}

// 查询打印机信息详细
export function getPrintsinfo (id) {
  return request({
    url: '/process/printsinfo/' + id,
    method: 'get'
  })
}

// 新增打印机信息
export function addPrintsinfo (data) {
  return request({
    url: '/process/printsinfo',
    method: 'post',
    data: data
  })
}

// 修改打印机信息
export function uptPrintsinfo (data) {
  return request({
    url: '/process/printsinfo',
    method: 'put',
    data: data
  })
}

// 删除打印机信息
export function delPrintsinfo (ids) {
  return request({
    url: '/process/printsinfo/' + ids,
    method: 'delete'
  })
}

// 导出打印机信息
export function exptPrintsinfo (data) {
  return request({
    url: '/process/printsinfo/export',
    method: 'post',
    data: data
  })
}
