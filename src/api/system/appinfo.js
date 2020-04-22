import request from '@/myutil/request'

// 查询应用信息列表
export function listAppinfo (data) {
  return request({
    url: '/sys/appinfo/list',
    method: 'post',
    data: data
  })
}

// 查询应用信息详细
export function getAppinfo (id) {
  return request({
    url: '/sys/appinfo/' + id,
    method: 'get'
  })
}

// 新增应用信息
export function addAppinfo (data) {
  return request({
    url: '/sys/appinfo',
    method: 'post',
    data: data
  })
}

// 修改应用信息
export function uptAppinfo (data) {
  return request({
    url: '/sys/appinfo',
    method: 'put',
    data: data
  })
}

// 删除应用信息
export function delAppinfo (ids) {
  return request({
    url: '/sys/appinfo/' + ids,
    method: 'delete'
  })
}

// 导出应用信息
export function exptAppinfo (data) {
  return request({
    url: '/sys/appinfo/export',
    method: 'post',
    data: data
  })
}
