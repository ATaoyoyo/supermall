/**
 * 防抖
 * @param {function} func 传入的函数
 * @param {Number} wait 延迟执行时间
 * @param {Boolean} immediate 是否立即执行
 */
export function debounce (func, wait, immediate) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
  }

}

/**
 * 函数节流
 * @param {function} func 
 * @param {Number} wait 
 * @param {Number} type 1 时间戳 2 定时版 
 */
export function throttle (func, wait, type) {
  if (type === 1) {
    var previous = 0
  } else if (type === 2) {
    var timeout = null
  }
  return function () {
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
        }, wait);
      }
    }
  }
}