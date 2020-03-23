<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车({{productCounter}})</template>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './cartComps/CartList'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList
  },
  computed: {
    productCounter() {
      return this.$store.state.cartList.length
    }
  }
}
</script>
<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  color: #fff;
  background-color: #ff8198;
}
</style>