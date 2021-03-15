export default function request(option) {
  return new Promise((resolve,reject)=> {
    wx.request({
      url: option.url,
      method: option.method || 'GET',
      success: resolve,
      fail: reject
    })
  })
}