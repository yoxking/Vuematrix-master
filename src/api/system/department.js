import request from '@/myutil/request'

// 查询部门列表
export function listDeptment (data) {
  return request({
    url: '/system/department/list',
    method: 'post',
    data: data
  })
}

// 查询部门下拉树结构
export function treeDeptment () {
  return request({
    url: '/system/department/tree',
    method: 'get'
  })
}

// 查询部门详细
export function getDeptment (id) {
  return request({
    url: '/system/department/' + id,
    method: 'get'
  })
}

// 新增部门
export function addDeptment (data) {
  return request({
    url: '/system/department',
    method: 'post',
    data: data
  })
}

// 修改部门
export function uptDeptment (data) {
  return request({
    url: '/system/department',
    method: 'put',
    data: data
  })
}

// 删除部门
export function delDeptment (ids) {
  return request({
    url: '/system/department/' + ids,
    method: 'delete'
  })
}

// 导出部门
export function exptDeptment (data) {
  return request({
    url: '/system/department/export',
    method: 'post',
    data: data
  })
}
