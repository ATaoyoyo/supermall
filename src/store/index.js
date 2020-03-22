import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // 查找数组中是否有该商品
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      )
      // 判断状态
      if (oldProduct) {
        oldProduct.count += 1
        context.commit('addCounter', oldProduct)
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
      }
    }
  }
})

export default store
