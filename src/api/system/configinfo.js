import request from '@/myutil/request'

// 查询参数配置列表
export function listConfiginfo (data) {
  return request({
    url: '/sys/configinfo/list',
    method: 'post',
    data: data
  })
}

// 查询参数配置详细
export function getConfiginfo (id) {
  return request({
    url: '/sys/configinfo/' + id,
    method: 'get'
  })
}

// 新增参数配置
export function addConfiginfo (data) {
  return request({
    url: '/sys/configinfo',
    method: 'post',
    data: data
  })
}

// 修改参数配置
export function uptConfiginfo (data) {
  return request({
    url: '/sys/configinfo',
    method: 'put',
    data: data
  })
}

// 删除参数配置
export function delConfiginfo (ids) {
  return request({
    url: '/sys/configinfo/' + ids,
    method: 'delete'
  })
}

// 导出参数配置
export function exptConfiginfo (data) {
  return request({
    url: '/sys/configinfo/export',
    method: 'post',
    data: data
  })
}
