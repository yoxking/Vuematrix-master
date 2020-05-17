import request from '@/myutil/request'

// 查询【请填写功能名称】列表
export function listFlowarchivs (data) {
  return request({
    url: '/flow/flowarchivs/list',
    method: 'post',
    data: data
  })
}

// 查询【请填写功能名称】详细
export function getFlowarchivs (id) {
  return request({
    url: '/flow/flowarchivs/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addFlowarchivs (data) {
  return request({
    url: '/flow/flowarchivs',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function uptFlowarchivs (data) {
  return request({
    url: '/flow/flowarchivs',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delFlowarchivs (ids) {
  return request({
    url: '/flow/flowarchivs/' + ids,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exptFlowarchivs (data) {
  return request({
    url: '/flow/flowarchivs/export',
    method: 'post',
    data: data
  })
}
