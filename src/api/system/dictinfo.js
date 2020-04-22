import request from '@/myutil/request'

// 查询字典数据列表
export function listDictinfo (data) {
  return request({
    url: '/sys/dictinfo/list',
    method: 'post',
    data: data
  })
}

// 查询字典数据详细
export function getDictinfo (id) {
  return request({
    url: '/sys/dictinfo/' + id,
    method: 'get'
  })
}

// 新增字典数据
export function addDictinfo (data) {
  return request({
    url: '/sys/dictinfo',
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function uptDictinfo (data) {
  return request({
    url: '/sys/dictinfo',
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delDictinfo (ids) {
  return request({
    url: '/sys/dictinfo/' + ids,
    method: 'delete'
  })
}

// 导出字典数据
export function exptDictinfo (data) {
  return request({
    url: '/sys/dictinfo/export',
    method: 'post',
    data: data
  })
}
