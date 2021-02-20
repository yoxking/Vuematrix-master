import request from '@/myutil/request'

// 查询单位信息列表
export function listStdunitinfo (data) {
  return request({
    url: '/process/stdunitinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeStdunitinfo () {
  return request({
    url: '/process/stdunitinfo/tree',
    method: 'get'
  })
}

// 查询单位信息详细
export function getStdunitinfo (id) {
  return request({
    url: '/process/stdunitinfo/' + id,
    method: 'get'
  })
}

// 新增单位信息
export function addStdunitinfo (data) {
  return request({
    url: '/process/stdunitinfo',
    method: 'post',
    data: data
  })
}

// 修改单位信息
export function uptStdunitinfo (data) {
  return request({
    url: '/process/stdunitinfo',
    method: 'put',
    data: data
  })
}

// 删除单位信息
export function delStdunitinfo (ids) {
  return request({
    url: '/process/stdunitinfo/' + ids,
    method: 'delete'
  })
}

// 导出单位信息
export function exptStdunitinfo (data) {
  return request({
    url: '/process/stdunitinfo/export',
    method: 'post',
    data: data
  })
}
