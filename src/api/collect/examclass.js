import request from '@/myutil/request'

// 查询测评类型列表
export function listExamclass (data) {
  return request({
    url: '/collect/examclass/list',
    method: 'post',
    data: data
  })
}

// 查询测评类型树结构
export function treeExamclass () {
  return request({
    url: '/collect/examclass/tree',
    method: 'get'
  })
}

// 查询测评类型详细
export function getExamclass (id) {
  return request({
    url: '/collect/examclass/' + id,
    method: 'get'
  })
}

// 新增测评类型
export function addExamclass (data) {
  return request({
    url: '/collect/examclass',
    method: 'post',
    data: data
  })
}

// 修改测评类型
export function uptExamclass (data) {
  return request({
    url: '/collect/examclass',
    method: 'put',
    data: data
  })
}

// 删除测评类型
export function delExamclass (ids) {
  return request({
    url: '/collect/examclass/' + ids,
    method: 'delete'
  })
}

// 导出测评类型
export function exptExamclass (data) {
  return request({
    url: '/collect/examclass/export',
    method: 'post',
    data: data
  })
}
