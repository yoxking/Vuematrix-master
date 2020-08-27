import request from '@/myutil/request'

// 查询问卷类型列表
export function listPaperclass (data) {
  return request({
    url: '/collect/paperclass/list',
    method: 'post',
    data: data
  })
}

// 查询问卷类型详细
export function getPaperclass (id) {
  return request({
    url: '/collect/paperclass/' + id,
    method: 'get'
  })
}

// 新增问卷类型
export function addPaperclass (data) {
  return request({
    url: '/collect/paperclass',
    method: 'post',
    data: data
  })
}

// 修改问卷类型
export function uptPaperclass (data) {
  return request({
    url: '/collect/paperclass',
    method: 'put',
    data: data
  })
}

// 删除问卷类型
export function delPaperclass (ids) {
  return request({
    url: '/collect/paperclass/' + ids,
    method: 'delete'
  })
}

// 导出问卷类型
export function exptPaperclass (data) {
  return request({
    url: '/collect/paperclass/export',
    method: 'post',
    data: data
  })
}
