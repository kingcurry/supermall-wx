
const baseUrl = 'http://152.136.185.210:7878/api/m5'
export default function request(option) {
  return new Promise((resolve,reject)=> {
    wx.request({
      url: baseUrl + option.url,
      method: option.method || 'GET',
      data: option.data,
      success: resolve,
      fail: reject
    })
  })
}