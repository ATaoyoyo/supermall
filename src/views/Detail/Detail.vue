<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <scroll class="content" ref="scroll">
      <detail-swiper :swiperData="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :desc="desc" :imgsList="imgsList" @imgLoad="imgLoad"></detail-goods-info>
      <detail-shop-params :params="params"></detail-shop-params>
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
import Scroll from '@/components/common/scroll/Scroll.vue'

import { getDetail, goods, shop, goodsParams } from '@/network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailShopParams,
    Scroll
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
      params: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      console.log(data)
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