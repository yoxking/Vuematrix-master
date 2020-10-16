import request from '@/myutil/request'

// 查询活动过程列表
export function listSalonflows (data) {
  return request({
    url: '/collect/salonflows/list',
    method: 'post',
    data: data
  })
}

// 查询活动过程详细
export function getSalonflows (id) {
  return request({
    url: '/collect/salonflows/' + id,
    method: 'get'
  })
}

// 新增活动过程
export function addSalonflows (data) {
  return request({
    url: '/collect/salonflows',
    method: 'post',
    data: data
  })
}

// 修改活动过程
export function uptSalonflows (data) {
  return request({
    url: '/collect/salonflows',
    method: 'put',
    data: data
  })
}

// 删除活动过程
export function delSalonflows (ids) {
  return request({
    url: '/collect/salonflows/' + ids,
    method: 'delete'
  })
}

// 导出活动过程
export function exptSalonflows (data) {
  return request({
    url: '/collect/salonflows/export',
    method: 'post',
    data: data
  })
}
