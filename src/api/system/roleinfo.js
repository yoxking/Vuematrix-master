import request from '@/myutil/request'

// 查询角色信息列表
export function listRoleinfo (data) {
  return request({
    url: '/system/roleinfo/list',
    method: 'post',
    data: data
  })
}

// 查询角色信息详细
export function getRoleinfo (id) {
  return request({
    url: '/system/roleinfo/' + id,
    method: 'get'
  })
}

// 新增角色信息
export function addRoleinfo (data) {
  return request({
    url: '/system/roleinfo',
    method: 'post',
    data: data
  })
}

// 修改角色信息
export function uptRoleinfo (data) {
  return request({
    url: '/system/roleinfo',
    method: 'put',
    data: data
  })
}

// 删除角色信息
export function delRoleinfo (ids) {
  return request({
    url: '/system/roleinfo/' + ids,
    method: 'delete'
  })
}

// 导出角色信息
export function exptRoleinfo (data) {
  return request({
    url: '/system/roleinfo/export',
    method: 'post',
    data: data
  })
}

// 查询角色信息详细
export function getRolesusers (roleNo) {
  return request({
    url: '/system/roleinfo/suersource/' + roleNo,
    method: 'get'
  })
}

// 查询角色信息详细
export function getRolepermit (roleNo) {
  return request({
    url: '/system/roleinfo/permittree/' + roleNo,
    method: 'get'
  })
}

// 查询角色信息详细
export function uptRolesusers (roleNo, suserNos) {
  const data = {
    roleNo, suserNos
  }
  return request({
    url: '/system/roleinfo/updateSusers',
    method: 'post',
    params: data
  })
}

// 查询角色信息详细
export function uptRolepermit (roleNo, permitNos) {
  const data = {
    roleNo, permitNos
  }
  return request({
    url: '/system/roleinfo/updatePermits',
    method: 'post',
    params: data
  })
}
