<template>
  <div class="goods-list-item">
    <div class="item-img">
      <img :src="goodsitem.show.img" @load="imgLoad" />
    </div>
    <div class="title">{{goodsitem.title}}</div>
    <div class="item-info">
      <span class="start">{{goodsitem.sale}}人付款</span>
      <span class="price">{{goodsitem.price | fixMoney(goodsitem.price)}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    }
  },
  filters: {
    fixMoney(money) {
      money = Number(money).toFixed(2)
      return `￥ ${money}`
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  display: inline-block;
  width: 48%;
  padding: 0.3846rem;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 5px;
}
.item-img {
  padding-bottom: 0.3846rem;
}
.item-img img {
  width: 100%;
  border-radius: 0.3846rem;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
}

.item-info {
  display: flex;
  text-align: center;
  align-items: flex-end;
  color: #f60;
}

.start {
  flex: 1;
  font-size: 0.7692rem;
  color: #666;
}
.price {
  padding-right: 0.3846rem;
}
.start,
.price {
  padding-top: 0.2308rem;
}
</style>