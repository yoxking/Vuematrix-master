import request from '@/myutil/request'

// 查询操作日志记录列表
export function listOperatelogs (data) {
  return request({
    url: '/sys/operatelogs/list',
    method: 'post',
    data: data
  })
}

// 查询操作日志记录详细
export function getOperatelogs (id) {
  return request({
    url: '/sys/operatelogs/' + id,
    method: 'get'
  })
}

// 新增操作日志记录
export function addOperatelogs (data) {
  return request({
    url: '/sys/operatelogs',
    method: 'post',
    data: data
  })
}

// 修改操作日志记录
export function uptOperatelogs (data) {
  return request({
    url: '/sys/operatelogs',
    method: 'put',
    data: data
  })
}

// 删除操作日志记录
export function delOperatelogs (ids) {
  return request({
    url: '/sys/operatelogs/' + ids,
    method: 'delete'
  })
}

// 导出操作日志记录
export function exptOperatelogs (data) {
  return request({
    url: '/sys/operatelogs/export',
    method: 'post',
    data: data
  })
}
