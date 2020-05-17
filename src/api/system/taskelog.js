import request from '@/myutil/request'

// 查询定时任务调度日志列表
export function listTaskelog (data) {
  return request({
    url: '/job/taskelog/list',
    method: 'post',
    data: data
  })
}

// 查询定时任务调度日志详细
export function getTaskelog (id) {
  return request({
    url: '/job/taskelog/' + id,
    method: 'get'
  })
}

// 新增定时任务调度日志
export function addTaskelog (data) {
  return request({
    url: '/job/taskelog',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度日志
export function uptTaskelog (data) {
  return request({
    url: '/job/taskelog',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度日志
export function delTaskelog (ids) {
  return request({
    url: '/job/taskelog/' + ids,
    method: 'delete'
  })
}

// 导出定时任务调度日志
export function exptTaskelog (data) {
  return request({
    url: '/job/taskelog/export',
    method: 'post',
    data: data
  })
}
