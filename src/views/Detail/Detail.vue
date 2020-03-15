<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <scroll class="content" ref="scroll">
      <detail-swiper :swiperData="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :desc="desc" :imgsList="imgsList" @imgLoad="imgLoad"></detail-goods-info>
      <detail-shop-params :params="params"></detail-shop-params>
      <detail-recomment :rateList="recomments"></detail-recomment>
      <goods-list :goodslist="recommends"></goods-list>
    </scroll>
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
import Scroll from '@/components/common/scroll/Scroll.vue'
import GoodsList from '@/components/content/goodsList/GoodsList'

import { getDetail, goods, shop, goodsParams, rate, getRecommend } from '@/network/detail.js'
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
    Scroll,
    GoodsList
  },
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
      recommends: []
    }
  },
  created() {
    this.iid = this.$route.params.iid
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
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refreshPullUp()
      this.$refs.scroll.finishPullUp()
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
  height: calc(100% - 44px);
}
</style>