<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{active: index === currentIndex}"
      v-for="(item, index) in title"
      :key="index"
      @click="clickIndex(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickIndex(i) {
      this.currentIndex = i
      this.$emit('tabClick', i)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  height: 3.3846rem;
  line-height: 3.3846rem;
  padding: 0.3rem;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  line-height: 43.9998px;
}
.active span {
  padding: 0.2rem;
  border-bottom: 0.2308rem solid #ff8198;
}
.active {
  color: #ff8198;
}
</style>