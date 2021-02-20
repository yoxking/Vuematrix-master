import request from '@/myutil/request'

// 查询有效期天数列表
export function listDterminfo (data) {
  return request({
    url: '/process/dterminfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeDterminfo () {
  return request({
    url: '/process/dterminfo/tree',
    method: 'get'
  })
}

// 查询有效期天数详细
export function getDterminfo (id) {
  return request({
    url: '/process/dterminfo/' + id,
    method: 'get'
  })
}

// 新增有效期天数
export function addDterminfo (data) {
  return request({
    url: '/process/dterminfo',
    method: 'post',
    data: data
  })
}

// 修改有效期天数
export function uptDterminfo (data) {
  return request({
    url: '/process/dterminfo',
    method: 'put',
    data: data
  })
}

// 删除有效期天数
export function delDterminfo (ids) {
  return request({
    url: '/process/dterminfo/' + ids,
    method: 'delete'
  })
}

// 导出有效期天数
export function exptDterminfo (data) {
  return request({
    url: '/process/dterminfo/export',
    method: 'post',
    data: data
  })
}
