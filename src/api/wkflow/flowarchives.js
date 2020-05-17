import request from '@/myutil/request'

// 查询【请填写功能名称】列表
export function listFlowarchives (data) {
  return request({
    url: '/flow/flowarchives/list',
    method: 'post',
    data: data
  })
}

// 查询【请填写功能名称】详细
export function getFlowarchives (id) {
  return request({
    url: '/flow/flowarchives/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addFlowarchives (data) {
  return request({
    url: '/flow/flowarchives',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function uptFlowarchives (data) {
  return request({
    url: '/flow/flowarchives',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delFlowarchives (ids) {
  return request({
    url: '/flow/flowarchives/' + ids,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exptFlowarchives (data) {
  return request({
    url: '/flow/flowarchives/export',
    method: 'post',
    data: data
  })
}
