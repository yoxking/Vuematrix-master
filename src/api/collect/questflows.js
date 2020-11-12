import request from '@/myutil/request'

// 查询答题结果列表
export function listQuestflows (data) {
  return request({
    url: '/collect/questflows/list',
    method: 'post',
    data: data
  })
}

// 查询答题结果详细
export function getQuestflows (id) {
  return request({
    url: '/collect/questflows/' + id,
    method: 'get'
  })
}

// 新增答题结果
export function addQuestflows (data) {
  return request({
    url: '/collect/questflows',
    method: 'post',
    data: data
  })
}

// 修改答题结果
export function uptQuestflows (data) {
  return request({
    url: '/collect/questflows',
    method: 'put',
    data: data
  })
}

// 删除答题结果
export function delQuestflows (ids) {
  return request({
    url: '/collect/questflows/' + ids,
    method: 'delete'
  })
}

// 导出答题结果
export function exptQuestflows (data) {
  return request({
    url: '/collect/questflows/export',
    method: 'post',
    data: data
  })
}
