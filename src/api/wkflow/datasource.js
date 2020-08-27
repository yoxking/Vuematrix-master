import request from '@/myutil/request'

// 查询数据源信息列表
export function listDatasource (data) {
  return request({
    url: '/wkflow/datasource/list',
    method: 'post',
    data: data
  })
}

// 查询数据源信息详细
export function getDatasource (id) {
  return request({
    url: '/wkflow/datasource/' + id,
    method: 'get'
  })
}

// 新增数据源信息
export function addDatasource (data) {
  return request({
    url: '/wkflow/datasource',
    method: 'post',
    data: data
  })
}

// 修改数据源信息
export function uptDatasource (data) {
  return request({
    url: '/wkflow/datasource',
    method: 'put',
    data: data
  })
}

// 删除数据源信息
export function delDatasource (ids) {
  return request({
    url: '/wkflow/datasource/' + ids,
    method: 'delete'
  })
}

// 导出数据源信息
export function exptDatasource (data) {
  return request({
    url: '/wkflow/datasource/export',
    method: 'post',
    data: data
  })
}
