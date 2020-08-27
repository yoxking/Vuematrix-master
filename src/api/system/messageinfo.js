import request from '@/myutil/request'

// 查询消息信息列表
export function listMessageinfo (data) {
  return request({
    url: '/system/messageinfo/list',
    method: 'post',
    data: data
  })
}

// 查询消息信息详细
export function getMessageinfo (id) {
  return request({
    url: '/system/messageinfo/' + id,
    method: 'get'
  })
}

// 新增消息信息
export function addMessageinfo (data) {
  return request({
    url: '/system/messageinfo',
    method: 'post',
    data: data
  })
}

// 修改消息信息
export function uptMessageinfo (data) {
  return request({
    url: '/system/messageinfo',
    method: 'put',
    data: data
  })
}

// 删除消息信息
export function delMessageinfo (ids) {
  return request({
    url: '/system/messageinfo/' + ids,
    method: 'delete'
  })
}

// 导出消息信息
export function exptMessageinfo (data) {
  return request({
    url: '/system/messageinfo/export',
    method: 'post',
    data: data
  })
}

// 获取未读消息列表
export function getMyMessages () {
  return request({
    url: '/system/messageinfo/getMessages',
    method: 'get'
  })
}
