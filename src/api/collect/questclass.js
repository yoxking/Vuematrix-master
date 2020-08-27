import request from '@/myutil/request'

// 查询测题类型列表
export function listQuestclass (data) {
  return request({
    url: '/collect/questclass/list',
    method: 'post',
    data: data
  })
}

// 查询测题类型详细
export function getQuestclass (id) {
  return request({
    url: '/collect/questclass/' + id,
    method: 'get'
  })
}

// 新增测题类型
export function addQuestclass (data) {
  return request({
    url: '/collect/questclass',
    method: 'post',
    data: data
  })
}

// 修改测题类型
export function uptQuestclass (data) {
  return request({
    url: '/collect/questclass',
    method: 'put',
    data: data
  })
}

// 删除测题类型
export function delQuestclass (ids) {
  return request({
    url: '/collect/questclass/' + ids,
    method: 'delete'
  })
}

// 导出测题类型
export function exptQuestclass (data) {
  return request({
    url: '/collect/questclass/export',
    method: 'post',
    data: data
  })
}
