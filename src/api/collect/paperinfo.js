import request from '@/myutil/request'

// 查询问卷信息列表
export function listPaperinfo (data) {
  return request({
    url: '/collect/paperinfo/list',
    method: 'post',
    data: data
  })
}

// 查询问卷信息详细
export function getPaperinfo (id) {
  return request({
    url: '/collect/paperinfo/' + id,
    method: 'get'
  })
}

// 新增问卷信息
export function addPaperinfo (data) {
  return request({
    url: '/collect/paperinfo',
    method: 'post',
    data: data
  })
}

// 修改问卷信息
export function uptPaperinfo (data) {
  return request({
    url: '/collect/paperinfo',
    method: 'put',
    data: data
  })
}

// 删除问卷信息
export function delPaperinfo (ids) {
  return request({
    url: '/collect/paperinfo/' + ids,
    method: 'delete'
  })
}

// 导出问卷信息
export function exptPaperinfo (data) {
  return request({
    url: '/collect/paperinfo/export',
    method: 'post',
    data: data
  })
}
