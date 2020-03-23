<template>
  <div id="detail">
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="titleIndex"></detail-nav>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :swiperData="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :desc="desc" :imgsList="imgsList" @imgLoad="imgLoad"></detail-goods-info>
      <detail-shop-params ref="params" :params="params"></detail-shop-params>
      <detail-recomment ref="comment" :rateList="recomments"></detail-recomment>
      <goods-list ref="recommend" :goodslist="recommends"></goods-list>
    </scroll>
    <detail-bottom-nav @addCart="addCart"></detail-bottom-nav>
    <back-to-top v-show="isShowTop" @click.native="backToTop"></back-to-top>
  </div>
</template>

<script>
import DetailNav from './detailComps/DetailNav'
import DetailSwiper from './detailComps/DetailSwiper'
import DetailBaseInfo from './detailComps/DetailBaseInfo'
import DetailShopInfo from './detailComps/DetailShopInfo'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo'
import DetailShopParams from './detailComps/DetailShopParams'
import DetailRecomment from './detailComps/DetailRecomment'
import DetailBottomNav from './detailComps/DetailBottomNav'
// import BackToTop from '@/components/content/backToTop/BackToTop'
import Scroll from '@/components/common/scroll/Scroll.vue'
import GoodsList from '@/components/content/goodsList/GoodsList'

import {
  getDetail,
  goods,
  shop,
  goodsParams,
  rate,
  getRecommend
} from '@/network/detail.js'
import { debounce } from '@/utils/index.js'
import { backToTop } from '@/common/mixin.js'
export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailShopParams,
    DetailRecomment,
    DetailBottomNav,
    // BackToTop,
    Scroll,
    GoodsList
  },
  mixins: [backToTop],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      imgsList: {},
      desc: '',
      params: {},
      recomments: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0
    }
  },
  created() {
    // 获取商品id
    this.iid = this.$route.params.iid
    // 请求商品数据
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      // 商品
      this.goods = new goods(
        data.itemInfo, // 商品详细信息
        data.columns, // 销量等
        data.shopInfo.services // 图标
      )
      // 店铺
      this.shop = new shop(data.shopInfo)
      // 商品详情
      this.goodsInfo = data.detailInfo
      // 图片
      this.imgsList = data.detailInfo.detailImage[0]
      // 商品描述
      this.desc = data.detailInfo.desc
      // 商品参数信息
      this.params = new goodsParams(data.itemParams.info, data.itemParams.rule)
      // 商品评论
      if (data.rate.cRate !== 0) {
        this.recomments = new rate(data.rate.cRate, data.rate.list)
      }
    })
    // 推荐商品
    getRecommend().then(res => {
      res = res.data
      this.recommends = res.list
    })
    // 获取标题跳转 y 值
    this.getThemeTopYs = debounce(
      () => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      },
      100,
      false
    )
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refreshPullUp()
      this.$refs.scroll.finishPullUp()
      this.getThemeTopYs()
    },
    titleClick(i) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[i], 300)
    },
    scroll(position) {
      const positionY = -position.y
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (this.currentIndex !== i) {
          if (
            positionY > this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]
          ) {
            this.currentIndex = i
            this.$refs.titleIndex.currentIndex = i
          }
        }
      }
      this.listenShopTop(position)
    },
    addCart() {
      const product = {}
      product.iid = this.iid
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      // 将商品添加到vuex
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
}
</style>