import request from './request'

const baseUrl = 'http://152.136.185.210:7878/api/m5'
export function getmultidata() {
    return request({
      url: baseUrl + '/home/multidata'
    })
  }
  
