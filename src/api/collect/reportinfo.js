import request from '@/myutil/request'

// 查询报告信息列表
export function listReportinfo (data) {
  return request({
    url: '/collect/reportinfo/list',
    method: 'post',
    data: data
  })
}

// 查询报告信息详细
export function getReportinfo (id) {
  return request({
    url: '/collect/reportinfo/' + id,
    method: 'get'
  })
}

// 新增报告信息
export function addReportinfo (data) {
  return request({
    url: '/collect/reportinfo',
    method: 'post',
    data: data
  })
}

// 修改报告信息
export function uptReportinfo (data) {
  return request({
    url: '/collect/reportinfo',
    method: 'put',
    data: data
  })
}

// 删除报告信息
export function delReportinfo (ids) {
  return request({
    url: '/collect/reportinfo/' + ids,
    method: 'delete'
  })
}

// 导出报告信息
export function exptReportinfo (data) {
  return request({
    url: '/collect/reportinfo/export',
    method: 'post',
    data: data
  })
}
