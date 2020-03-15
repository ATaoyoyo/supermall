<template>
  <div class="goods-info">
    <div class="desc" :v-if="desc">{{desc}}</div>
    <div class="imgs">
      <img v-for="(item,index) in imgsList.list" :key="index" :src="item" @load="imgLoad" />
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/index.js'
export default {
  props: {
    imgsList: {
      type: Object,
      default() {
        return {}
      }
    },
    desc: {
      type: String
    }
  },
  methods: {
    imgLoad() {
      debounce(this.$emit('imgLoad'), 300, false)
    }
  }
}
</script>

<style scoped>
.desc{
  padding: 0.7692rem;
  font-size: 0.7692rem;
  color: #666;
}
.imgs img {
  width: 100%;
}
</style>