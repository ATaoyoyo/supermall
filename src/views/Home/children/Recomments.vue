<template>
  <div class="recomments">
    <div class="recomments-item" v-for="item in recomments" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recomments',
  props: {
    recomments: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recomments {
  display: flex;
  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recomments-item {
  flex: 1;
  text-align: center;
  font-size: 0.3rem;
}
.recomments-item img {
  width: 4.5rem;
  height: 4.5rem;
}
.recomments-item span {
  display: inline-block;
}
</style>