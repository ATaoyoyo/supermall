<template>
  <nav-bar class="nav-bar">
    <template v-slot:left >
      <img src="~@/assets/img/common/back.svg" @click="backToHome" />
    </template>
    <template v-slot:center>
      <div class="titles">
        <span
          class="titles-item"
          :class="{active:currentIndex === index}"
          v-for="(item, index) in titles"
          :key="item"
          @click="changeCurrent(index)"
        >{{item}}</span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0,
      titles: ['商品', '参数', '评论', '推荐']
    }
  },
  methods: {
    changeCurrent(i) {
      this.currentIndex = i
    },
    backToHome(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.nav-bar {
  box-shadow: 1px 0px .5px #666;
}

.titles {
  display: flex;
  flex: 1;
  align-items: center;
}
.titles-item {
  flex: 1;
  font-size: 0.9231rem;
  color: #333;
}
.active{
  color: #ff8198;
}
</style>