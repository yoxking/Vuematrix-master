import request from '@/myutil/request'

// 查询器械类型列表
export function listEquipclass (data) {
  return request({
    url: '/process/equipclass/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeEquipclass () {
  return request({
    url: '/process/equipclass/tree',
    method: 'get'
  })
}

// 查询器械类型详细
export function getEquipclass (id) {
  return request({
    url: '/process/equipclass/' + id,
    method: 'get'
  })
}

// 新增器械类型
export function addEquipclass (data) {
  return request({
    url: '/process/equipclass',
    method: 'post',
    data: data
  })
}

// 修改器械类型
export function uptEquipclass (data) {
  return request({
    url: '/process/equipclass',
    method: 'put',
    data: data
  })
}

// 删除器械类型
export function delEquipclass (ids) {
  return request({
    url: '/process/equipclass/' + ids,
    method: 'delete'
  })
}

// 导出器械类型
export function exptEquipclass (data) {
  return request({
    url: '/process/equipclass/export',
    method: 'post',
    data: data
  })
}
