<template>
  <div class="detail-bottom-nav">
    <div class="left">
      <div class="serve">
        <i class="icon icon-serve"></i>
        <div class="name">客服</div>
      </div>
      <div class="shop">
        <i class="icon icon-shop"></i>
        <div class="name">店铺</div>
      </div>
      <div class="star">
        <i class="icon icon-star"></i>
        <div class="name">收藏</div>
      </div>
    </div>
    <div class="right">
      <div class="add-cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.detail-bottom-nav {
  position: relative;
  display: flex;
  height: 49px;
  color: #333;
  background-color: #fff;
}

.left,
.right {
  display: flex;
  flex: 1;
  font-size: 0.9231rem;
  color: #ccc;
  align-items: center;
}

.serve,
.shop,
.star {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.icon {
  margin-bottom: 0.1538rem;
}

.icon-serve {
  background: url('../../../assets/img/detail/detail_bottom.png') no-repeat 0 -53px;
  background-size: 22px 150px;
  width: 22px;
  height: 21px;
}

.icon-shop {
  background: url('../../../assets/img/detail/detail_bottom.png') no-repeat 0 -100px;
  background-size: 22px 150px;
  width: 22px;
  height: 19px;
}

.icon-star {
  background: url('../../../assets/img/detail/detail_bottom.png') no-repeat -1px -1px;
  background-size: 22px 150px;
  width: 19px;
  height: 18px;
}
.right {
  font-size: 1.0769rem;
  color: #fff;
}

.add-cart,
.buy {
  text-align: center;
  height: 100%;
  line-height: 49px;
}
.add-cart {
  flex: 1;
  background-color: #f60;
}

.buy {
  padding: 0 0.7692rem;
  background-color: #f43;
}
</style>