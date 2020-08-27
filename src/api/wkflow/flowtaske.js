import request from '@/myutil/request'

// 查询流程任务列表
export function listFlowtaske (data) {
  return request({
    url: '/wkflow/flowtaske/list',
    method: 'post',
    data: data
  })
}

// 查询流程任务详细
export function getFlowtaske (id) {
  return request({
    url: '/wkflow/flowtaske/' + id,
    method: 'get'
  })
}

// 新增流程任务
export function addFlowtaske (data) {
  return request({
    url: '/wkflow/flowtaske',
    method: 'post',
    data: data
  })
}

// 修改流程任务
export function uptFlowtaske (data) {
  return request({
    url: '/wkflow/flowtaske',
    method: 'put',
    data: data
  })
}

// 删除流程任务
export function delFlowtaske (ids) {
  return request({
    url: '/wkflow/flowtaske/' + ids,
    method: 'delete'
  })
}

// 导出流程任务
export function exptFlowtaske (data) {
  return request({
    url: '/wkflow/flowtaske/export',
    method: 'post',
    data: data
  })
}
