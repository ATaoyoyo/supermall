/**
 * 防抖
 * @param {function} func 传入的函数
 * @param {Number} wait 延迟执行时间
 * @param {Boolean} immediate 是否立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout = null
  return function() {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * 函数节流
 * @param {function} func
 * @param {Number} wait
 * @param {Number} type 1 时间戳 2 定时版
 */
export function throttle(func, wait, type) {
  if (type === 1) {
    var previous = 0
  } else if (type === 2) {
    var timeout = null
  }
  return function() {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = new Date()
      if (now - previous > wait) {
        func.apply(context, args)
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

/**
 * 时期格式化
 * @param {*} data
 * @param {*} fmat
 */
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// 封装格式化时间正则函数  (时间, '格式化')
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}
