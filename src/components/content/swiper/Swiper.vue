<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperData" :key="item.index">
        <img :src="item.image" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  props: {
    swiperData: { type: Array, required: true }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      autoplay:true,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
img {
  width: 100%;
}
</style>