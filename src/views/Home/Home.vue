<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车</template>
    </nav-bar>
    <tab-control
      class="fixed"
      :title="['流行', '新款','精选']"
      @tabClick="tabClick"
      v-show="tabShow"
      ref="tabControl1"
    />
    <!-- better scroll 区域 -->
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @scrollLoad="scrollLoad"
    >
      <!-- 轮播图 -->
      <swiper :swiperData="banners" @swiperImgLoad="swiperImgLoad" />
      <!-- 推荐 -->
      <recommends :recomments="recommends" />
      <!-- 商品导航 -->
      <tab-control :title="['流行', '新款','精选']" @tabClick="tabClick" ref="tabControl2" />
      <!-- 商品列表 -->
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
    <!-- 回到顶部 -->
    <back-to-top @click.native="backToTop" v-show="isShowBackToTop"></back-to-top>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Swiper from '@/components/content/swiper/Swiper.vue'
import Recommends from './children/Recomments.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goodsList/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackToTop from '@/components/content/backToTop/BackToTop.vue'

import { getHomeMultiData, getHomeGoods } from '@/network/home.js'
import { debounce } from '@/utils/index.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    Recommends,
    TabControl,
    GoodsList,
    Scroll,
    BackToTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentTab: 'pop',
      isShowBackToTop: false,
      offsetTop: 0,
      tabShow: false,
      saveY: 0,
      itemImgListener: null
    }
  },
  created() {
    this._multidata()
    this._goods('pop')
    this._goods('new')
    this._goods('sell')
  },
  mounted() {
    const debounceRefresh = debounce(
      this.$refs.scroll.refreshPullUp,
      500,
      false
    )
    this.itemImgListener = () =>{
      debounceRefresh
    }
    this.$bus.$on('imgLoad', () => {
      debounceRefresh()
    })
    this.swiperImgLoad()
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
     * 事件相关
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
      this.$refs.tabControl1.currentIndex = i
      this.$refs.tabControl2.currentIndex = i
    },
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      // 返回顶部图标出现
      this.isShowBackToTop = -position.y > 1000
      this.tabShow = -position.y > this.offsetTop
    },
    scrollLoad() {
      // 上拉加载
      this._goods(this.currentTab)
      const debounceFinish = debounce(
        this.$refs.scroll.finishPullUp,
        500,
        false
      )
      debounceFinish()
    },
    swiperImgLoad() {
      // tabControl吸顶
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTab].list
    }
  },
  // 保留页面停留位置
  activated() {
    this.$refs.scroll.refreshPullUp()
    this.saveY = this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('imgLoad', this.itemImgListener)
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

.fixed {
  position: relative;
  z-index: 9;
}
</style>