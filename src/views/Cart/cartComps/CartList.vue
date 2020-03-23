<template>
  <div class="cart-lit">
    <scroll class="scroll" ref="scroll">
      <cart-list-item :list-item="item" v-for="(item, index) in cartList" :key="'list'+ index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  data() {
    return {
      cartList: this.$store.state.cartList
    }
  },
  activated() {
    this.$refs.scroll.refreshPullUp()
    
  },
}
</script>

<style scoped>
.scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>