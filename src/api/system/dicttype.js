import request from '@/myutil/request'

// 查询字典类型列表
export function listDicttype (data) {
  return request({
    url: '/system/dicttype/list',
    method: 'post',
    data: data
  })
}

// 查询字典类型详细
export function getDicttype (id) {
  return request({
    url: '/system/dicttype/' + id,
    method: 'get'
  })
}

// 新增字典类型
export function addDicttype (data) {
  return request({
    url: '/system/dicttype',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function uptDicttype (data) {
  return request({
    url: '/system/dicttype',
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delDicttype (ids) {
  return request({
    url: '/system/dicttype/' + ids,
    method: 'delete'
  })
}

// 导出字典类型
export function exptDicttype (data) {
  return request({
    url: '/system/dicttype/export',
    method: 'post',
    data: data
  })
}
