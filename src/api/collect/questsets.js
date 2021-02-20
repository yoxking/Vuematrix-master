import request from '@/myutil/request'

// 查询题库信息列表
export function listQuestsets (data) {
  return request({
    url: '/collect/questsets/list',
    method: 'post',
    data: data
  })
}

// 查询题库树结构
export function treeQuestsets () {
  return request({
    url: '/collect/questsets/tree',
    method: 'get'
  })
}

// 查询题库信息详细
export function getQuestsets (id) {
  return request({
    url: '/collect/questsets/' + id,
    method: 'get'
  })
}

// 新增题库信息
export function addQuestsets (data) {
  return request({
    url: '/collect/questsets',
    method: 'post',
    data: data
  })
}

// 修改题库信息
export function uptQuestsets (data) {
  return request({
    url: '/collect/questsets',
    method: 'put',
    data: data
  })
}

// 删除题库信息
export function delQuestsets (ids) {
  return request({
    url: '/collect/questsets/' + ids,
    method: 'delete'
  })
}

// 导出题库信息
export function exptQuestsets (data) {
  return request({
    url: '/collect/questsets/export',
    method: 'post',
    data: data
  })
}
