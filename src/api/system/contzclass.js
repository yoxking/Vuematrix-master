import request from '@/myutil/request'

// 查询内容类型列表
export function listContzclass (data) {
  return request({
    url: '/sys/contzclass/list',
    method: 'post',
    data: data
  })
}

// 查询内容类型详细
export function getContzclass (id) {
  return request({
    url: '/sys/contzclass/' + id,
    method: 'get'
  })
}

// 新增内容类型
export function addContzclass (data) {
  return request({
    url: '/sys/contzclass',
    method: 'post',
    data: data
  })
}

// 修改内容类型
export function uptContzclass (data) {
  return request({
    url: '/sys/contzclass',
    method: 'put',
    data: data
  })
}

// 删除内容类型
export function delContzclass (ids) {
  return request({
    url: '/sys/contzclass/' + ids,
    method: 'delete'
  })
}

// 导出内容类型
export function exptContzclass (data) {
  return request({
    url: '/sys/contzclass/export',
    method: 'post',
    data: data
  })
}
