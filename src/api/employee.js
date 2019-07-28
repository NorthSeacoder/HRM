import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/api/employee/create',
    method: 'post',
    data
  })
}
export function upload(data) {
  return request({
    url: '/api/employee/import',
    method: 'post',
    data
  })
}
export function create(data) {
  return request({
    url: '/api/employee/create',
    method: 'post',
    data
  })
}
