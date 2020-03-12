<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <detail-swiper :swiperData="topImages"></detail-swiper>
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
import DetailNav from './detailComps/DetailNav'
import DetailSwiper from './detailComps/DetailSwiper'

import { getDetail } from '@/network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      console.log(data)
    })
  }
}
</script>

<style scoped>
</style>