<template>
  <div class="base-info" v-if="Object.keys(goods.length !== 0)">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="active">活动价</span>
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
    </div>
    <div class="info">
      <span class="info-item" v-for="item in goods.columns" :key="item">{{item}}</span>
      <span class="info-item">72小时内发货</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 0.7692rem;
}

.title {
  font-size: 1.0769rem;
  color: #333;
  padding-bottom: 0.3846rem;
  margin-bottom: 0.3846rem;
  border-bottom: 1px solid #eee;
}
.price {
  position: relative;
  margin-bottom: 0.3846rem;
}

.new-price {
  font-size: 1.5385rem;
  color: #f60;
  margin-right: 0.3846rem;
}

.old-price {
  color: #ddd;
}

.active {
  font-size: 0.3846rem;
  padding: 0.0769rem;
  margin-right: 0.3846rem;
  color: #fff;
  background-color: #f60;
  border-radius: 0.1538rem;
  
}

.info {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.7692rem;
}

/* .info-item {
  flex: 1;
  text-align: center;
} */
</style>