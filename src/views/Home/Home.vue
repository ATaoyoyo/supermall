<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车</template>
    </nav-bar>
    <swiper :swiperData="banners" />
    <recommends :recomments="recommends" />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/common/navbar/NavBar.vue'
import Swiper from '@/components/content/swiper/Swiper.vue'
import Recommends from './children/Recomments.vue'
import { getHomeMultiData } from '@/network/home.js'
export default {
  name: 'Home',
  components: { NavBar, Swiper, Recommends },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      res = res.data
      this.banners = res.banner.list
      this.recommends = res.recommend.list
    })
  }
}
</script>
<style scoped>
.nav-bar {
  background-color: #ff8198;
  color: #fff;
}
</style>