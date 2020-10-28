import request from '@/myutil/request'

// 查询注册用户排班列表
export function listRuserrota (data) {
  return request({
    url: '/system/ruserrota/list',
    method: 'post',
    data: data
  })
}

// 查询注册用户排班详细
export function getRuserrota (id) {
  return request({
    url: '/system/ruserrota/' + id,
    method: 'get'
  })
}

// 新增注册用户排班
export function addRuserrota (data) {
  return request({
    url: '/system/ruserrota',
    method: 'post',
    data: data
  })
}

// 修改注册用户排班
export function uptRuserrota (data) {
  return request({
    url: '/system/ruserrota',
    method: 'put',
    data: data
  })
}

// 删除注册用户排班
export function delRuserrota (ids) {
  return request({
    url: '/system/ruserrota/' + ids,
    method: 'delete'
  })
}

// 导出注册用户排班
export function exptRuserrota (data) {
  return request({
    url: '/system/ruserrota/export',
    method: 'post',
    data: data
  })
}
