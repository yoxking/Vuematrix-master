import request from '@/myutil/request'

// 查询器械信息列表
export function listEquipments (data) {
  return request({
    url: '/process/equipments/list',
    method: 'post',
    data: data
  })
}

// 查询类型树结构
export function treeEquipments (val) {
  return request({
    url: '/process/equipments/tree?equipType=' + val,
    method: 'get'
  })
}

// 查询器械信息详细
export function getEquipments (id) {
  return request({
    url: '/process/equipments/' + id,
    method: 'get'
  })
}

// 新增器械信息
export function addEquipments (data) {
  return request({
    url: '/process/equipments',
    method: 'post',
    data: data
  })
}

// 修改器械信息
export function uptEquipments (data) {
  return request({
    url: '/process/equipments',
    method: 'put',
    data: data
  })
}

// 删除器械信息
export function delEquipments (ids) {
  return request({
    url: '/process/equipments/' + ids,
    method: 'delete'
  })
}

// 导出器械信息
export function exptEquipments (data) {
  return request({
    url: '/process/equipments/export',
    method: 'post',
    data: data
  })
}
