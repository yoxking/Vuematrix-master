import request from '@/myutil/request'

// 查询代码生成业务字段列表
export function listTabcolumn (data) {
  return request({
    url: '/sys/tabcolumn/list',
    method: 'post',
    data: data
  })
}

// 查询代码生成业务字段详细
export function getTabcolumn (id) {
  return request({
    url: '/sys/tabcolumn/' + id,
    method: 'get'
  })
}

// 新增代码生成业务字段
export function addTabcolumn (data) {
  return request({
    url: '/sys/tabcolumn',
    method: 'post',
    data: data
  })
}

// 修改代码生成业务字段
export function uptTabcolumn (data) {
  return request({
    url: '/sys/tabcolumn',
    method: 'put',
    data: data
  })
}

// 删除代码生成业务字段
export function delTabcolumn (ids) {
  return request({
    url: '/sys/tabcolumn/' + ids,
    method: 'delete'
  })
}

// 导出代码生成业务字段
export function exptTabcolumn (data) {
  return request({
    url: '/sys/tabcolumn/export',
    method: 'post',
    data: data
  })
}
