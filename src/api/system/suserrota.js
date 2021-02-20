import request from '@/myutil/request'

// 查询系统用户排班列表
export function listSuserrota (data) {
  return request({
    url: '/system/suserrota/list',
    method: 'post',
    data: data
  })
}

// 查询系统用户排班详细
export function getSuserrota (id) {
  return request({
    url: '/system/suserrota/' + id,
    method: 'get'
  })
}

// 新增系统用户排班
export function addSuserrota (data) {
  return request({
    url: '/system/suserrota',
    method: 'post',
    data: data
  })
}

// 修改系统用户排班
export function uptSuserrota (data) {
  return request({
    url: '/system/suserrota',
    method: 'put',
    data: data
  })
}

// 删除系统用户排班
export function delSuserrota (ids) {
  return request({
    url: '/system/suserrota/' + ids,
    method: 'delete'
  })
}

// 导出系统用户排班
export function exptSuserrota (data) {
  return request({
    url: '/system/suserrota/export',
    method: 'post',
    data: data
  })
}
