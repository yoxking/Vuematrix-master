import request from '@/myutil/request'

// 查询测评结果列表
export function listExamsflows (data) {
  return request({
    url: '/collect/examsflows/list',
    method: 'post',
    data: data
  })
}

// 查询测评结果详细
export function getExamsflows (id) {
  return request({
    url: '/collect/examsflows/' + id,
    method: 'get'
  })
}

// 新增测评结果
export function addExamsflows (data) {
  return request({
    url: '/collect/examsflows',
    method: 'post',
    data: data
  })
}

// 修改测评结果
export function uptExamsflows (data) {
  return request({
    url: '/collect/examsflows',
    method: 'put',
    data: data
  })
}

// 删除测评结果
export function delExamsflows (ids) {
  return request({
    url: '/collect/examsflows/' + ids,
    method: 'delete'
  })
}

// 导出测评结果
export function exptExamsflows (data) {
  return request({
    url: '/collect/examsflows/export',
    method: 'post',
    data: data
  })
}
