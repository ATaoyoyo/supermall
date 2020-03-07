<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车</template>
    </nav-bar>
    <scroll class="content">
      <!-- 轮播图 -->
      <swiper :swiperData="banners" />
      <!-- 推荐 -->
      <recommends :recomments="recommends" />
      <!-- 商品导航 -->
      <tab-control :title="['流行', '新款','精选']" @tabClick="tabClick"></tab-control>
      <!-- 商品列表 -->
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/common/navbar/NavBar.vue'
import Swiper from '@/components/content/swiper/Swiper.vue'
import Recommends from './children/Recomments.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goodsList/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'

import { getHomeMultiData, getHomeGoods } from '@/network/home.js'
export default {
  name: 'Home',
  components: { NavBar, Swiper, Recommends, TabControl, GoodsList, Scroll },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentTab: 'pop'
    }
  },
  created() {
    this._multidata()
    this._goods('pop')
    this._goods('new')
    this._goods('sell')
  },
  methods: {
    /**
     * 网络请求相关
     */
    _multidata() {
      getHomeMultiData().then(res => {
        res = res.data
        this.banners = res.banner.list
        this.recommends = res.recommend.list
      })
    },
    _goods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        res = res.data
        this.goods[type].list.push(...res.list)
        this.goods[type].page + 1
      })
    },
    /**
     * 点击事件相关
     */
    tabClick(i) {
      switch (i) {
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2:
          this.currentTab = 'sell'
          break
      }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTab].list
    }
  }
}
</script>
<style scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.nav-bar {
  background-color: #ff8198;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>