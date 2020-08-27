import request from '@/myutil/request'

// 查询菜单权限列表
export function listPermitinfo (data) {
  return request({
    url: '/system/permitinfo/list',
    method: 'post',
    data: data
  })
}

// 查询部门下拉树结构
export function treePermitinfo () {
  return request({
    url: '/system/permitinfo/tree',
    method: 'get'
  })
}

// 查询菜单权限详细
export function getPermitinfo (id) {
  return request({
    url: '/system/permitinfo/' + id,
    method: 'get'
  })
}

// 新增菜单权限
export function addPermitinfo (data) {
  return request({
    url: '/system/permitinfo',
    method: 'post',
    data: data
  })
}

// 修改菜单权限
export function uptPermitinfo (data) {
  return request({
    url: '/system/permitinfo',
    method: 'put',
    data: data
  })
}

// 删除菜单权限
export function delPermitinfo (ids) {
  return request({
    url: '/system/permitinfo/' + ids,
    method: 'delete'
  })
}

// 导出菜单权限
export function exptPermitinfo (data) {
  return request({
    url: '/system/permitinfo/export',
    method: 'post',
    data: data
  })
}
