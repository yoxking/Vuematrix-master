import request from '@/myutil/request'

// 查询内容信息列表
export function listContentinfo (data) {
  return request({
    url: '/sys/contentinfo/list',
    method: 'post',
    data: data
  })
}

// 查询内容信息列表
export function getClasslist () {
  return request({
    url: '/sys/contentinfo/classlist',
    method: 'get'
  })
}

// 查询内容信息详细
export function getContentinfo (id) {
  return request({
    url: '/sys/contentinfo/' + id,
    method: 'get'
  })
}

// 新增内容信息
export function addContentinfo (data) {
  return request({
    url: '/sys/contentinfo',
    method: 'post',
    data: data
  })
}

// 修改内容信息
export function uptContentinfo (data) {
  return request({
    url: '/sys/contentinfo',
    method: 'put',
    data: data
  })
}

// 删除内容信息
export function delContentinfo (ids) {
  return request({
    url: '/sys/contentinfo/' + ids,
    method: 'delete'
  })
}

// 导出内容信息
export function exptContentinfo (data) {
  return request({
    url: '/sys/contentinfo/export',
    method: 'post',
    data: data
  })
}
