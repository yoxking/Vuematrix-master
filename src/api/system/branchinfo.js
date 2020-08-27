import request from '@/myutil/request'

// 查询分支信息列表
export function listBranchinfo (data) {
  return request({
    url: '/system/branchinfo/list',
    method: 'post',
    data: data
  })
}

// 查询分支信息详细
export function getBranchinfo (id) {
  return request({
    url: '/system/branchinfo/' + id,
    method: 'get'
  })
}

// 新增分支信息
export function addBranchinfo (data) {
  return request({
    url: '/system/branchinfo',
    method: 'post',
    data: data
  })
}

// 修改分支信息
export function uptBranchinfo (data) {
  return request({
    url: '/system/branchinfo',
    method: 'put',
    data: data
  })
}

// 删除分支信息
export function delBranchinfo (ids) {
  return request({
    url: '/system/branchinfo/' + ids,
    method: 'delete'
  })
}

// 导出分支信息
export function exptBranchinfo (data) {
  return request({
    url: '/system/branchinfo/export',
    method: 'post',
    data: data
  })
}
