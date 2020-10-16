import request from '@/myutil/request'

// 查询日记类型列表
export function listBlogclass (data) {
  return request({
    url: '/collect/blogclass/list',
    method: 'post',
    data: data
  })
}

// 查询问卷类型树结构
export function treeBlogclass () {
  return request({
    url: '/collect/blogclass/tree',
    method: 'get'
  })
}

// 查询日记类型详细
export function getBlogclass (id) {
  return request({
    url: '/collect/blogclass/' + id,
    method: 'get'
  })
}

// 新增日记类型
export function addBlogclass (data) {
  return request({
    url: '/collect/blogclass',
    method: 'post',
    data: data
  })
}

// 修改日记类型
export function uptBlogclass (data) {
  return request({
    url: '/collect/blogclass',
    method: 'put',
    data: data
  })
}

// 删除日记类型
export function delBlogclass (ids) {
  return request({
    url: '/collect/blogclass/' + ids,
    method: 'delete'
  })
}

// 导出日记类型
export function exptBlogclass (data) {
  return request({
    url: '/collect/blogclass/export',
    method: 'post',
    data: data
  })
}
