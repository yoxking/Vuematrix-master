import request from '@/myutil/request'

// 查询测题选项列表
export function listQuestopts (data) {
  return request({
    url: '/collect/questopts/list',
    method: 'post',
    data: data
  })
}

// 查询测题选项详细
export function getQuestopts (id) {
  return request({
    url: '/collect/questopts/' + id,
    method: 'get'
  })
}

// 新增测题选项
export function addQuestopts (data) {
  return request({
    url: '/collect/questopts',
    method: 'post',
    data: data
  })
}

// 修改测题选项
export function uptQuestopts (data) {
  return request({
    url: '/collect/questopts',
    method: 'put',
    data: data
  })
}

// 删除测题选项
export function delQuestopts (ids) {
  return request({
    url: '/collect/questopts/' + ids,
    method: 'delete'
  })
}

// 导出测题选项
export function exptQuestopts (data) {
  return request({
    url: '/collect/questopts/export',
    method: 'post',
    data: data
  })
}
