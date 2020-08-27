import request from '@/myutil/request'

// 查询测评题库列表
export function listQuestinfo (data) {
  return request({
    url: '/collect/questinfo/list',
    method: 'post',
    data: data
  })
}

// 查询测评题库详细
export function getQuestinfo (id) {
  return request({
    url: '/collect/questinfo/' + id,
    method: 'get'
  })
}

// 新增测评题库
export function addQuestinfo (data) {
  return request({
    url: '/collect/questinfo',
    method: 'post',
    data: data
  })
}

// 修改测评题库
export function uptQuestinfo (data) {
  return request({
    url: '/collect/questinfo',
    method: 'put',
    data: data
  })
}

// 删除测评题库
export function delQuestinfo (ids) {
  return request({
    url: '/collect/questinfo/' + ids,
    method: 'delete'
  })
}

// 导出测评题库
export function exptQuestinfo (data) {
  return request({
    url: '/collect/questinfo/export',
    method: 'post',
    data: data
  })
}
