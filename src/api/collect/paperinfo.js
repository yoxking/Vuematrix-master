import request from '@/myutil/request'

// 查询问卷信息列表
export function listPaperinfo (data) {
  return request({
    url: '/collect/paperinfo/list',
    method: 'post',
    data: data
  })
}

// 查询测评类型树结构
export function treePaperinfo () {
  return request({
    url: '/collect/paperinfo/tree',
    method: 'get'
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

// 查询问卷题库
export function getPaperqsets (paperNo) {
  return request({
    url: '/collect/paperinfo/getPaperqsets/' + paperNo,
    method: 'get'
  })
}

// 查询问卷题目
export function getPaperquests (paperNo) {
  return request({
    url: '/collect/paperinfo/getPaperquests/' + paperNo,
    method: 'get'
  })
}

// 修改问卷题库
export function uptPaperqsets (paperNo, qsetsNos) {
  return request({
    url: '/collect/paperinfo/uptPaperqsets',
    method: 'post',
    data: {'paperNo': paperNo, 'paperQsets': qsetsNos}
  })
}

// 删除问卷题库
export function delPaperqsets (paperNo, qsetsNo) {
  return request({
    url: '/collect/paperinfo/delPaperqsets',
    method: 'post',
    data: {'paperNo': paperNo, 'qsetsNo': qsetsNo}
  })
}

// 修改问卷题目
export function uptPaperquests (paperNo, questsNos) {
  return request({
    url: '/collect/paperinfo/uptPaperquests',
    method: 'post',
    data: {'paperNo': paperNo, 'paperQuests': questsNos}
  })
}

// 删除问卷题目
export function delPaperquests (paperNo, questsNo) {
  return request({
    url: '/collect/paperinfo/delPaperquests',
    method: 'post',
    data: {'paperNo': paperNo, 'questsNo': questsNo}
  })
}

// 修改问卷规则
export function uptPaperqrules (paperNo, qrules) {
  return request({
    url: '/collect/paperinfo/uptPaperqrules',
    method: 'post',
    data: {'paperNo': paperNo, 'paperQrules': qrules}
  })
}

// 修改问卷分数
export function uptPapertscore (paperNo, tscore) {
  return request({
    url: '/collect/paperinfo/uptPapertscore',
    method: 'post',
    data: {'paperNo': paperNo, 'paperTscore': tscore}
  })
}
