<template>
  <div class="detail-params">
    <div class="params">
      <div class="title">商品说明</div>
      <div class="params-item" v-for="item in params.info" :key="item.index">
        <span class="key">{{item.key}}</span>
        <span class="value">{{item.value}}</span>
      </div>
    </div>
    <div class="rule">
      <div class="rule-item">
        <div class="title">参数说明</div>
        <div class="rules">
          <div class="table" v-for="(item, index) in params.rule" :key="index">
            <span class="table-item" v-for="(info ,i) in item" :key="i">{{info}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopParams',
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      info: this.params.info,
      rule: this.params.rule
    }
  },
  mounted() {
    console.log(this.params)
  }
}
</script>

<style scoped>
.detail-params {
  padding: 0.7692rem;
}

.params-item,
.table {
  display: flex;
}
.title {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #333;
  padding-top: 0.7692rem;
  padding-bottom: 0.3846rem;
  border-bottom: 1px solid #ddd;
}
.params-item span,
.table-item {
  line-height: 2.5385rem;
  border-bottom: 1px solid #ddd;
}
.key,
.table-item:nth-child(1) {
  border-right: 1px solid #ddd;
  padding: 0 0.3846rem;
}
.value,
.table-item:nth-child(2),
.table-item:nth-child(3),
.table-item:nth-child(4),
.table-item:nth-child(5) {
  flex: 1;
  text-align: center;
  padding-left: 0.3846rem;
}
</style>