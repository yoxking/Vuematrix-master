import request from '@/myutil/request'

// 查询部门列表
export function listDept (data) {
  return request({
    url: '/sys/deptment/list',
    method: 'post',
    data: data
  })
}

// 查询部门下拉树结构
export function treeDept () {
  return request({
    url: '/sys/deptment/tree',
    method: 'get'
  })
}

// 查询部门详细
export function getDept (deptId) {
  return request({
    url: '/sys/deptment/' + deptId,
    method: 'get'
  })
}

// 新增部门
export function addDept (data) {
  return request({
    url: '/sys/deptment',
    method: 'post',
    data: data
  })
}

// 修改部门
export function uptDept (data) {
  return request({
    url: '/sys/deptment',
    method: 'put',
    data: data
  })
}

// 删除部门
export function delDept (deptIds) {
  return request({
    url: '/sys/deptment/' + deptIds,
    method: 'delete'
  })
}

// 导出部门
export function exptDept (data) {
  return request({
    url: '/sys/deptment/export',
    method: 'post',
    data: data
  })
}
