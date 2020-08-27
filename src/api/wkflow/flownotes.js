import request from '@/myutil/request'

// 查询流程处理意见列表
export function listFlownotes (data) {
  return request({
    url: '/wkflow/flownotes/list',
    method: 'post',
    data: data
  })
}

// 查询流程处理意见详细
export function getFlownotes (id) {
  return request({
    url: '/wkflow/flownotes/' + id,
    method: 'get'
  })
}

// 新增流程处理意见
export function addFlownotes (data) {
  return request({
    url: '/wkflow/flownotes',
    method: 'post',
    data: data
  })
}

// 修改流程处理意见
export function uptFlownotes (data) {
  return request({
    url: '/wkflow/flownotes',
    method: 'put',
    data: data
  })
}

// 删除流程处理意见
export function delFlownotes (ids) {
  return request({
    url: '/wkflow/flownotes/' + ids,
    method: 'delete'
  })
}

// 导出流程处理意见
export function exptFlownotes (data) {
  return request({
    url: '/wkflow/flownotes/export',
    method: 'post',
    data: data
  })
}
