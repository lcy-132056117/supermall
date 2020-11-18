import { request } from "./request";

export function getHomeMutidata() {
  return request({
    // url: '/recommend',
    url: '/home/multidata',

  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })

}
// function test() {
//   const names = ['lcy', '111 ']
// }

// let totalNums = []

// const nums = [20, 11, 22]
// const nums = [20, 11, 333]


// totalNums = nums