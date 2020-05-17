import request from '@/myutil/request'

// 查询单设计列表
export function listTableform (data) {
  return request({
    url: '/flow/tableform/list',
    method: 'post',
    data: data
  })
}

// 查询单设计详细
export function getTableform (id) {
  return request({
    url: '/flow/tableform/' + id,
    method: 'get'
  })
}

// 新增单设计
export function addTableform (data) {
  return request({
    url: '/flow/tableform',
    method: 'post',
    data: data
  })
}

// 修改单设计
export function uptTableform (data) {
  return request({
    url: '/flow/tableform',
    method: 'put',
    data: data
  })
}

// 删除单设计
export function delTableform (ids) {
  return request({
    url: '/flow/tableform/' + ids,
    method: 'delete'
  })
}

// 导出单设计
export function exptTableform (data) {
  return request({
    url: '/flow/tableform/export',
    method: 'post',
    data: data
  })
}
