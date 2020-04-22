import request from '@/myutil/request'

// 查询应用类型列表
export function listAppclass (data) {
  return request({
    url: '/sys/appclass/list',
    method: 'post',
    data: data
  })
}

// 查询应用类型详细
export function getAppclass (id) {
  return request({
    url: '/sys/appclass/' + id,
    method: 'get'
  })
}

// 新增应用类型
export function addAppclass (data) {
  return request({
    url: '/sys/appclass',
    method: 'post',
    data: data
  })
}

// 修改应用类型
export function uptAppclass (data) {
  return request({
    url: '/sys/appclass',
    method: 'put',
    data: data
  })
}

// 删除应用类型
export function delAppclass (ids) {
  return request({
    url: '/sys/appclass/' + ids,
    method: 'delete'
  })
}

// 导出应用类型
export function exptAppclass (data) {
  return request({
    url: '/sys/appclass/export',
    method: 'post',
    data: data
  })
}
