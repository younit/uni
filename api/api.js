const domain = "https://api.slymfs.com/" //  地址
// const domain = "http://localhost:3000/" //  地址
 
const request = (url, method, data) => {
  let _url = domain  + url
  return new Promise((resolve, reject) => {
    uni.request({
      url: _url,
      method: method,
      data: data,
      header: {
//         'Content-Type': 'application/json',
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}
/**
 * 商品列表
 */
export const shopsList = params => request('shops','get', params)


 
