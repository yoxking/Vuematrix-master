import request from '@/myutil/request'

// 查询签到类型列表
export function listCheckclass (data) {
  return request({
    url: '/process/checkclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeCheckclass () {
  return request({
    url: '/process/checkclass/tree',
    method: 'get'
  })
}

// 查询签到类型详细
export function getCheckclass (id) {
  return request({
    url: '/process/checkclass/' + id,
    method: 'get'
  })
}

// 新增签到类型
export function addCheckclass (data) {
  return request({
    url: '/process/checkclass',
    method: 'post',
    data: data
  })
}

// 修改签到类型
export function uptCheckclass (data) {
  return request({
    url: '/process/checkclass',
    method: 'put',
    data: data
  })
}

// 删除签到类型
export function delCheckclass (ids) {
  return request({
    url: '/process/checkclass/' + ids,
    method: 'delete'
  })
}

// 导出签到类型
export function exptCheckclass (data) {
  return request({
    url: '/process/checkclass/export',
    method: 'post',
    data: data
  })
}
