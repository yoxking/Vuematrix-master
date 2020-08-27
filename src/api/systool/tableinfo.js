import request from '@/myutil/request'

// 查询代码生成业务列表
export function listTableinfo (data) {
  return request({
    url: '/genert/tableinfo/list',
    method: 'post',
    data: data
  })
}

// 查询代码生成业务详细
export function getTableinfo (id) {
  return request({
    url: '/genert/tableinfo/' + id,
    method: 'get'
  })
}

// 删除代码生成业务
export function delTableinfo (ids) {
  return request({
    url: '/genert/tableinfo/' + ids,
    method: 'delete'
  })
}

// 查询db数据库列表
export function listDbTable () {
  return request({
    url: '/genert/tableinfo/dbTableList',
    method: 'get'
  })
}

// 导入表
export function importTable (data) {
  return request({
    url: '/genert/tableinfo/importTable',
    method: 'post',
    data: data
  })
}

// 预览生成代码
export function previewTable (tableId) {
  return request({
    url: '/genert/tableinfo/preview/' + tableId,
    method: 'get'
  })
}

// 导出代码生成业务
export function exptTableinfo (data) {
  return request({
    url: '/genert/tableinfo/export',
    method: 'post',
    data: data
  })
}
