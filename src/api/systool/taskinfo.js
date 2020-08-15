import request from '@/myutil/request'

// 查询定时任务调度列表
export function listTaskinfo (data) {
  return request({
    url: '/task/taskinfo/list',
    method: 'post',
    data: data
  })
}

// 查询定时任务调度详细
export function getTaskinfo (id) {
  return request({
    url: '/task/taskinfo/' + id,
    method: 'get'
  })
}

// 新增定时任务调度
export function addTaskinfo (data) {
  return request({
    url: '/task/taskinfo',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function uptTaskinfo (data) {
  return request({
    url: '/task/taskinfo',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度
export function delTaskinfo (ids) {
  return request({
    url: '/task/taskinfo/' + ids,
    method: 'delete'
  })
}

// 导出定时任务调度
export function exptTaskinfo (data) {
  return request({
    url: '/task/taskinfo/export',
    method: 'post',
    data: data
  })
}

// 执行一次定时任务调度
export function startTaskinfo (taskNo) {
  const data = {
    taskNo
  }
  return request({
    url: '/task/taskinfo/startTask',
    method: 'post',
    data: data
  })
}
// 导出定时任务调度
export function changeTaskStatus (taskNo, taskStatus) {
  const data = {
    taskNo: taskNo,
    taskStatus: taskStatus
  }
  return request({
    url: '/task/taskinfo/changeStatus',
    method: 'post',
    data: data
  })
}

// 导出定时任务调度
export function checkExpress (express) {
  const data = {
    express
  }
  return request({
    url: '/task/taskinfo/checkExpress',
    method: 'post',
    params: data
  })
}
