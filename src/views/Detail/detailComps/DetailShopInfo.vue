<template>
  <div class="shop-info">
    <div class="title">
      <a :href="shop.shopUrl">
        <img :src="shop.logo" />
        <span>{{shop.name}}</span>
      </a>
    </div>
    <div class="info">
      <div class="left">
        <div class="sell">
          <span>总销量</span>
          {{shop.sells | shopSell(shop.sells)}}
        </div>
        <div class="goods">
          <span>全部宝贝</span>
          {{shop.goodsCount}}
        </div>
      </div>
      <div class="right">
        <div class="desc" v-for="(item,index) in shop.score" :key="index">
          <span class="name">{{item.name}}</span>
          <span :class="{'high-score':item.isBetter}" class="score">{{item.score}}</span>
          <span :class="{'high-better':item.isBetter}" class="better">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      score: ''
    }
  },
  filters: {
    shopSell(sells) {
      sells = sells + ''
      let sNum = sells.slice(0, 1)
      return `${sNum}万`
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 0.7692rem;
}
.title {
  display: flex;
  align-items: center;
  margin-bottom: 0.3846rem;
  padding-bottom: 0.3846rem;
  border-bottom: 1px solid #eee;
}
.title a{
  display: flex;
  align-items: center;
}
.title img {
  width: 3.8462rem;
  height: 3.8462rem;
  border-radius: 50%;
  border: 1px solid #eee;
  margin-right: 0.7692rem;
}
.title span {
  font-size: 1.0769rem;
}

.info {
  display: flex;
  height: 4.5462rem;
  padding-top: 0.3846rem;
  padding: 0.3846rem;
  border-bottom: 1px solid #ddd;
}
.left,
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left {
  border-right: 1px solid #ddd;
}

.left span,
.right span {
  font-size: 0.9231rem;
  color: #333;
}

.right {
  padding-left: 0.3846rem;
}
.right span {
  padding: 0 0.3846rem;
}
.right .better {
  float: right;
  color: #fff;
  padding: 0;
  background-color: #f60;
}

.right .score {
  color: #f60;
}

.right .high-score {
  color: green;
}

.right .high-better {
  color: #fff;
  background-color: green;
}
</style>