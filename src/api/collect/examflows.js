import request from '@/myutil/request'

// 查询测评结果列表
export function listExamflows (data) {
  return request({
    url: '/collect/examflows/list',
    method: 'post',
    data: data
  })
}

// 查询测评结果详细
export function getExamflows (id) {
  return request({
    url: '/collect/examflows/' + id,
    method: 'get'
  })
}

// 新增测评结果
export function addExamflows (data) {
  return request({
    url: '/collect/examflows',
    method: 'post',
    data: data
  })
}

// 修改测评结果
export function uptExamflows (data) {
  return request({
    url: '/collect/examflows',
    method: 'put',
    data: data
  })
}

// 删除测评结果
export function delExamflows (ids) {
  return request({
    url: '/collect/examflows/' + ids,
    method: 'delete'
  })
}

// 导出测评结果
export function exptExamflows (data) {
  return request({
    url: '/collect/examflows/export',
    method: 'post',
    data: data
  })
}
