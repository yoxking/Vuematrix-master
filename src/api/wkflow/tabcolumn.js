import request from '@/myutil/request'

// 查询单字段列表
export function listTabcolumn (data) {
  return request({
    url: '/flow/tabcolumn/list',
    method: 'post',
    data: data
  })
}

// 查询单字段详细
export function getTabcolumn (id) {
  return request({
    url: '/flow/tabcolumn/' + id,
    method: 'get'
  })
}

// 新增单字段
export function addTabcolumn (data) {
  return request({
    url: '/flow/tabcolumn',
    method: 'post',
    data: data
  })
}

// 修改单字段
export function uptTabcolumn (data) {
  return request({
    url: '/flow/tabcolumn',
    method: 'put',
    data: data
  })
}

// 删除单字段
export function delTabcolumn (ids) {
  return request({
    url: '/flow/tabcolumn/' + ids,
    method: 'delete'
  })
}

// 导出单字段
export function exptTabcolumn (data) {
  return request({
    url: '/system/tabcolumn/export',
    method: 'post',
    data: data
  })
}
