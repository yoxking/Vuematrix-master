import request from '@/myutil/request'

// 查询测评信息列表
export function listExamsinfo (data) {
  return request({
    url: '/collect/examsinfo/list',
    method: 'post',
    data: data
  })
}

// 查询测评信息详细
export function getExamsinfo (id) {
  return request({
    url: '/collect/examsinfo/' + id,
    method: 'get'
  })
}

// 新增测评信息
export function addExamsinfo (data) {
  return request({
    url: '/collect/examsinfo',
    method: 'post',
    data: data
  })
}

// 修改测评信息
export function uptExamsinfo (data) {
  return request({
    url: '/collect/examsinfo',
    method: 'put',
    data: data
  })
}

// 删除测评信息
export function delExamsinfo (ids) {
  return request({
    url: '/collect/examsinfo/' + ids,
    method: 'delete'
  })
}

// 导出测评信息
export function exptExamsinfo (data) {
  return request({
    url: '/collect/examsinfo/export',
    method: 'post',
    data: data
  })
}
