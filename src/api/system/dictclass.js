import request from '@/myutil/request'

// 查询字典类型列表
export function listDictclass (data) {
  return request({
    url: '/sys/dictclass/list',
    method: 'post',
    data: data
  })
}

// 查询字典类型详细
export function getDictclass (id) {
  return request({
    url: '/sys/dictclass/' + id,
    method: 'get'
  })
}

// 新增字典类型
export function addDictclass (data) {
  return request({
    url: '/sys/dictclass',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function uptDictclass (data) {
  return request({
    url: '/sys/dictclass',
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delDictclass (ids) {
  return request({
    url: '/sys/dictclass/' + ids,
    method: 'delete'
  })
}

// 导出字典类型
export function exptDictclass (data) {
  return request({
    url: '/sys/dictclass/export',
    method: 'post',
    data: data
  })
}
