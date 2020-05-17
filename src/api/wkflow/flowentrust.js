import request from '@/myutil/request'

// 查询流程委托列表
export function listFlowentrust (data) {
  return request({
    url: '/flow/flowentrust/list',
    method: 'post',
    data: data
  })
}

// 查询流程委托详细
export function getFlowentrust (id) {
  return request({
    url: '/flow/flowentrust/' + id,
    method: 'get'
  })
}

// 新增流程委托
export function addFlowentrust (data) {
  return request({
    url: '/flow/flowentrust',
    method: 'post',
    data: data
  })
}

// 修改流程委托
export function uptFlowentrust (data) {
  return request({
    url: '/flow/flowentrust',
    method: 'put',
    data: data
  })
}

// 删除流程委托
export function delFlowentrust (ids) {
  return request({
    url: '/flow/flowentrust/' + ids,
    method: 'delete'
  })
}

// 导出流程委托
export function exptFlowentrust (data) {
  return request({
    url: '/flow/flowentrust/export',
    method: 'post',
    data: data
  })
}
