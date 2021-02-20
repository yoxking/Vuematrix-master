import request from '@/myutil/request'

// 查询值班类型列表
export function listRotaclass (data) {
  return request({
    url: '/system/rotaclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeRotaclass () {
  return request({
    url: '/system/rotaclass/tree',
    method: 'get'
  })
}

// 查询值班类型详细
export function getRotaclass (id) {
  return request({
    url: '/system/rotaclass/' + id,
    method: 'get'
  })
}

// 新增值班类型
export function addRotaclass (data) {
  return request({
    url: '/system/rotaclass',
    method: 'post',
    data: data
  })
}

// 修改值班类型
export function uptRotaclass (data) {
  return request({
    url: '/system/rotaclass',
    method: 'put',
    data: data
  })
}

// 删除值班类型
export function delRotaclass (ids) {
  return request({
    url: '/system/rotaclass/' + ids,
    method: 'delete'
  })
}

// 导出值班类型
export function exptRotaclass (data) {
  return request({
    url: '/system/rotaclass/export',
    method: 'post',
    data: data
  })
}
