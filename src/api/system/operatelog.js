import request from '@/myutil/request'

// 查询操作日志记录列表
export function listOperatelog (data) {
  return request({
    url: '/system/operatelog/list',
    method: 'post',
    data: data
  })
}

// 查询操作日志记录详细
export function getOperatelog (id) {
  return request({
    url: '/system/operatelog/' + id,
    method: 'get'
  })
}

// 新增操作日志记录
export function addOperatelog (data) {
  return request({
    url: '/system/operatelog',
    method: 'post',
    data: data
  })
}

// 修改操作日志记录
export function uptOperatelog (data) {
  return request({
    url: '/system/operatelog',
    method: 'put',
    data: data
  })
}

// 删除操作日志记录
export function delOperatelog (ids) {
  return request({
    url: '/system/operatelog/' + ids,
    method: 'delete'
  })
}

// 导出操作日志记录
export function exptOperatelog (data) {
  return request({
    url: '/system/operatelog/export',
    method: 'post',
    data: data
  })
}
