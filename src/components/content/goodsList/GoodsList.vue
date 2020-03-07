<template>
  <div class="goods-list">
    <goods-item v-for="item in goodslist" :key="item.iid" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goodslist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { GoodsItem }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>