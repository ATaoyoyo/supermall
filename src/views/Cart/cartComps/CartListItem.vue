<template>
  <div class="cart-list-item">
    <div class="check">
      <check-box :is-checked="listItem.checked" @click.native="checked"></check-box>
    </div>
    <div class="item-img">
      <img :src="listItem.img" />
    </div>
    <div class="item-info">
      <div class="info-top">
        <div class="info-title">{{listItem.title}}</div>
        <div class="info-desc">{{listItem.desc}}</div>
      </div>
      <div class="info-bottom">
        <div class="price">{{itemTotalPrice}}</div>
        <div class="count">x{{listItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/common/checkbox/CheckBox'
export default {
  name: 'CartListItem',
  components: {
    CheckBox
  },
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checked() {
      this.listItem.checked = !this.listItem.checked
    }
  },
  computed: {
    itemTotalPrice() {
      let price = this.listItem.count * parseInt(this.listItem.price)
      return '￥' + price.toFixed(2)
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  height: 6.9231rem;
  margin: 0.7692rem;
  overflow: hidden;
  padding-bottom: 0.3846rem;
  border-bottom: 1px solid #eee;
}
.check {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
}
.item-img {
  border-radius: 0.3846rem;
  overflow: hidden;
  width: 6rem;
  margin-right: 0.7692rem;
}
.item-img img {
  width: 100%;
}
.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.info-top,
.info-bottom {
  flex: 1;
  padding: 0.3846rem 0;
}
.info-title,
.info-desc {
  width: 15rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 0.4231rem;
}
.info-title {
  color: #333;
  font-size: 1.0769rem;
}
.info-desc {
  color: #666;
  font-size: 0.9231rem;
}
.info-bottom {
  display: flex;
  align-items: flex-end;
}
.price,
.count {
  flex: 1;
  font-weight: bold;
}
.price {
  color: #f60;
}
.count {
  font-size: 0.9231rem;
  text-align: right;
}
</style>