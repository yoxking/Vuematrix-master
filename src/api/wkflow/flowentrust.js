import request from '@/myutil/request'

// 查询流程委托列表
export function listFlowentrust (data) {
  return request({
    url: '/wkflow/flowentrust/list',
    method: 'post',
    data: data
  })
}

// 查询流程委托详细
export function getFlowentrust (id) {
  return request({
    url: '/wkflow/flowentrust/' + id,
    method: 'get'
  })
}

// 新增流程委托
export function addFlowentrust (data) {
  return request({
    url: '/wkflow/flowentrust',
    method: 'post',
    data: data
  })
}

// 修改流程委托
export function uptFlowentrust (data) {
  return request({
    url: '/wkflow/flowentrust',
    method: 'put',
    data: data
  })
}

// 删除流程委托
export function delFlowentrust (ids) {
  return request({
    url: '/wkflow/flowentrust/' + ids,
    method: 'delete'
  })
}

// 导出流程委托
export function exptFlowentrust (data) {
  return request({
    url: '/wkflow/flowentrust/export',
    method: 'post',
    data: data
  })
}
