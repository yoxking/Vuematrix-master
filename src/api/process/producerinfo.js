import request from '@/myutil/request'

// 查询生产商信息列表
export function listProducerinfo (data) {
  return request({
    url: '/process/producerinfo/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeProducerinfo () {
  return request({
    url: '/process/producerinfo/tree',
    method: 'get'
  })
}

// 查询生产商信息详细
export function getProducerinfo (id) {
  return request({
    url: '/process/producerinfo/' + id,
    method: 'get'
  })
}

// 新增生产商信息
export function addProducerinfo (data) {
  return request({
    url: '/process/producerinfo',
    method: 'post',
    data: data
  })
}

// 修改生产商信息
export function uptProducerinfo (data) {
  return request({
    url: '/process/producerinfo',
    method: 'put',
    data: data
  })
}

// 删除生产商信息
export function delProducerinfo (ids) {
  return request({
    url: '/process/producerinfo/' + ids,
    method: 'delete'
  })
}

// 导出生产商信息
export function exptProducerinfo (data) {
  return request({
    url: '/process/producerinfo/export',
    method: 'post',
    data: data
  })
}
