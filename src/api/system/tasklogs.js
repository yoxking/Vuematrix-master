import request from '@/myutil/request'

// 查询定时任务调度日志列表
export function listTasklogs (data) {
  return request({
    url: '/job/tasklogs/list',
    method: 'post',
    data: data
  })
}

// 查询定时任务调度日志详细
export function getTasklogs (id) {
  return request({
    url: '/job/tasklogs/' + id,
    method: 'get'
  })
}

// 新增定时任务调度日志
export function addTasklogs (data) {
  return request({
    url: '/job/tasklogs',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度日志
export function uptTasklogs (data) {
  return request({
    url: '/job/tasklogs',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度日志
export function delTasklogs (ids) {
  return request({
    url: '/job/tasklogs/' + ids,
    method: 'delete'
  })
}

// 导出定时任务调度日志
export function exptTasklogs (data) {
  return request({
    url: '/job/tasklogs/export',
    method: 'post',
    data: data
  })
}
