import request from '@/myutil/request'

// 查询活动类型列表
export function listSalonclass (data) {
  return request({
    url: '/collect/salonclass/list',
    method: 'post',
    data: data
  })
}

// 查询问卷类型树结构
export function treeSalonclass () {
  return request({
    url: '/collect/salonclass/tree',
    method: 'get'
  })
}

// 查询活动类型详细
export function getSalonclass (id) {
  return request({
    url: '/collect/salonclass/' + id,
    method: 'get'
  })
}

// 新增活动类型
export function addSalonclass (data) {
  return request({
    url: '/collect/salonclass',
    method: 'post',
    data: data
  })
}

// 修改活动类型
export function uptSalonclass (data) {
  return request({
    url: '/collect/salonclass',
    method: 'put',
    data: data
  })
}

// 删除活动类型
export function delSalonclass (ids) {
  return request({
    url: '/collect/salonclass/' + ids,
    method: 'delete'
  })
}

// 导出活动类型
export function exptSalonclass (data) {
  return request({
    url: '/collect/salonclass/export',
    method: 'post',
    data: data
  })
}
