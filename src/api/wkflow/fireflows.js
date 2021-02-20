import request from '@/myutil/request'

// 查询工作流详细
export function testFireflows () {
  return request({
    url: '/wkflow/fireflows/test',
    method: 'get'
  })
}
