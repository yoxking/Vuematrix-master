import request from '@/myutil/request'

// 查询字典数据列表
export function listDictdata (data) {
  return request({
    url: '/system/dictdata/list',
    method: 'post',
    data: data
  })
}

// 查询内容信息列表
export function getTypelist () {
  return request({
    url: '/system/dictdata/typelist',
    method: 'get'
  })
}

// 查询字典数据详细
export function getDictdata (id) {
  return request({
    url: '/system/dictdata/' + id,
    method: 'get'
  })
}

// 新增字典数据
export function addDictdata (data) {
  return request({
    url: '/system/dictdata',
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function uptDictdata (data) {
  return request({
    url: '/system/dictdata',
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delDictdata (ids) {
  return request({
    url: '/system/dictdata/' + ids,
    method: 'delete'
  })
}

// 导出字典数据
export function exptDictdata (data) {
  return request({
    url: '/system/dictdata/export',
    method: 'post',
    data: data
  })
}
