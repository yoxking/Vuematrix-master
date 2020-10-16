import request from '@/myutil/request'

// 查询日记信息列表
export function listBlogsinfo (data) {
  return request({
    url: '/collect/blogsinfo/list',
    method: 'post',
    data: data
  })
}

// 查询日记信息详细
export function getBlogsinfo (id) {
  return request({
    url: '/collect/blogsinfo/' + id,
    method: 'get'
  })
}

// 新增日记信息
export function addBlogsinfo (data) {
  return request({
    url: '/collect/blogsinfo',
    method: 'post',
    data: data
  })
}

// 修改日记信息
export function uptBlogsinfo (data) {
  return request({
    url: '/collect/blogsinfo',
    method: 'put',
    data: data
  })
}

// 删除日记信息
export function delBlogsinfo (ids) {
  return request({
    url: '/collect/blogsinfo/' + ids,
    method: 'delete'
  })
}

// 导出日记信息
export function exptBlogsinfo (data) {
  return request({
    url: '/collect/blogsinfo/export',
    method: 'post',
    data: data
  })
}
