import request from '@/myutil/request'

// 查询工作流程按钮列表
export function listFlowbutton (data) {
  return request({
    url: '/flow/flowbutton/list',
    method: 'post',
    data: data
  })
}

// 查询工作流程按钮详细
export function getFlowbutton (id) {
  return request({
    url: '/flow/flowbutton/' + id,
    method: 'get'
  })
}

// 新增工作流程按钮
export function addFlowbutton (data) {
  return request({
    url: '/flow/flowbutton',
    method: 'post',
    data: data
  })
}

// 修改工作流程按钮
export function uptFlowbutton (data) {
  return request({
    url: '/flow/flowbutton',
    method: 'put',
    data: data
  })
}

// 删除工作流程按钮
export function delFlowbutton (ids) {
  return request({
    url: '/flow/flowbutton/' + ids,
    method: 'delete'
  })
}

// 导出工作流程按钮
export function exptFlowbutton (data) {
  return request({
    url: '/flow/flowbutton/export',
    method: 'post',
    data: data
  })
}
