import request from '@/myutil/request'

// 查询菜单权限列表
export function listPermitinfo (data) {
  return request({
    url: '/sys/permitinfo/list',
    method: 'post',
    data: data
  })
}

// 查询菜单权限详细
export function getPermitinfo (id) {
  return request({
    url: '/sys/permitinfo/' + id,
    method: 'get'
  })
}

// 新增菜单权限
export function addPermitinfo (data) {
  return request({
    url: '/sys/permitinfo',
    method: 'post',
    data: data
  })
}

// 修改菜单权限
export function uptPermitinfo (data) {
  return request({
    url: '/sys/permitinfo',
    method: 'put',
    data: data
  })
}

// 删除菜单权限
export function delPermitinfo (ids) {
  return request({
    url: '/sys/permitinfo/' + ids,
    method: 'delete'
  })
}

// 导出菜单权限
export function exptPermitinfo (data) {
  return request({
    url: '/sys/permitinfo/export',
    method: 'post',
    data: data
  })
}
