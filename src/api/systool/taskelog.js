import request from '@/myutil/request'

// 查询定时任务调度日志列表
export function listTaskelog (data) {
  return request({
    url: '/task/taskelog/list',
    method: 'post',
    data: data
  })
}

// 查询定时任务调度日志详细
export function getTaskelog (id) {
  return request({
    url: '/task/taskelog/' + id,
    method: 'get'
  })
}

// 新增定时任务调度日志
export function addTaskelog (data) {
  return request({
    url: '/task/taskelog',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度日志
export function uptTaskelog (data) {
  return request({
    url: '/task/taskelog',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度日志
export function delTaskelog (ids) {
  return request({
    url: '/task/taskelog/' + ids,
    method: 'delete'
  })
}

// 导出定时任务调度日志
export function exptTaskelog (data) {
  return request({
    url: '/task/taskelog/export',
    method: 'post',
    data: data
  })
}
