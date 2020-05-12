import request from '@/myutil/request'

// 查询定时任务调度列表
export function listTaskinfo (data) {
  return request({
    url: '/job/taskinfo/list',
    method: 'post',
    data: data
  })
}

// 查询定时任务调度详细
export function getTaskinfo (id) {
  return request({
    url: '/job/taskinfo/' + id,
    method: 'get'
  })
}

// 新增定时任务调度
export function addTaskinfo (data) {
  return request({
    url: '/job/taskinfo',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function uptTaskinfo (data) {
  return request({
    url: '/job/taskinfo',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度
export function delTaskinfo (ids) {
  return request({
    url: '/job/taskinfo/' + ids,
    method: 'delete'
  })
}

// 导出定时任务调度
export function exptTaskinfo (data) {
  return request({
    url: '/job/taskinfo/export',
    method: 'post',
    data: data
  })
}

// 导出定时任务调度
export function startTaskinfo (taskNo) {
  const data = {
    taskNo
  }
  return request({
    url: '/job/taskinfo/startTask',
    method: 'post',
    params: data
  })
}

// 导出定时任务调度
export function checkExpress (express) {
  const data = {
    express
  }
  return request({
    url: '/job/taskinfo/checkExpress',
    method: 'post',
    params: data
  })
}
