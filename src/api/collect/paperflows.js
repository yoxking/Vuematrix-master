import request from '@/myutil/request'

// 查询测评结果列表
export function listPaperflows (data) {
  return request({
    url: '/collect/paperflows/list',
    method: 'post',
    data: data
  })
}

// 查询测评结果详细
export function getPaperflows (id) {
  return request({
    url: '/collect/paperflows/' + id,
    method: 'get'
  })
}

// 新增测评结果
export function addPaperflows (data) {
  return request({
    url: '/collect/paperflows',
    method: 'post',
    data: data
  })
}

// 修改测评结果
export function uptPaperflows (data) {
  return request({
    url: '/collect/paperflows',
    method: 'put',
    data: data
  })
}

// 删除测评结果
export function delPaperflows (ids) {
  return request({
    url: '/collect/paperflows/' + ids,
    method: 'delete'
  })
}

// 导出测评结果
export function exptPaperflows (data) {
  return request({
    url: '/collect/paperflows/export',
    method: 'post',
    data: data
  })
}
