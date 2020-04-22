import request from '@/myutil/request'

// 查询定时任务调度列表
export function listTaskinfo (data) {
  return request({
    url: '/sys/taskinfo/list',
    method: 'post',
    data: data
  })
}

// 查询定时任务调度详细
export function getTaskinfo (id) {
  return request({
    url: '/sys/taskinfo/' + id,
    method: 'get'
  })
}

// 新增定时任务调度
export function addTaskinfo (data) {
  return request({
    url: '/sys/taskinfo',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function uptTaskinfo (data) {
  return request({
    url: '/sys/taskinfo',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度
export function delTaskinfo (ids) {
  return request({
    url: '/sys/taskinfo/' + ids,
    method: 'delete'
  })
}

// 导出定时任务调度
export function exptTaskinfo (data) {
  return request({
    url: '/sys/taskinfo/export',
    method: 'post',
    data: data
  })
}
