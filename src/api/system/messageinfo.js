import request from '@/myutil/request'

// 查询消息信息列表
export function listMessageinfo (data) {
  return request({
    url: '/sys/messageinfo/list',
    method: 'post',
    data: data
  })
}

// 查询消息信息详细
export function getMessageinfo (id) {
  return request({
    url: '/sys/messageinfo/' + id,
    method: 'get'
  })
}

// 新增消息信息
export function addMessageinfo (data) {
  return request({
    url: '/sys/messageinfo',
    method: 'post',
    data: data
  })
}

// 修改消息信息
export function uptMessageinfo (data) {
  return request({
    url: '/sys/messageinfo',
    method: 'put',
    data: data
  })
}

// 删除消息信息
export function delMessageinfo (ids) {
  return request({
    url: '/sys/messageinfo/' + ids,
    method: 'delete'
  })
}

// 导出消息信息
export function exptMessageinfo (data) {
  return request({
    url: '/sys/messageinfo/export',
    method: 'post',
    data: data
  })
}
