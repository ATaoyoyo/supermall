<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1 创建BSroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2 监听滚动事件
    this.scroll.on('scroll', position => {
      if (this.probeType) {
        this.$emit('scroll', position)
      }
    })
    // 3 监听上拉加载
    this.scroll.on('pullingUp', () => {
      if (this.pullUpLoad) {
        this.$emit('scrollLoad')
      }
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refreshPullUp() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      if (this.scroll) {
        return this.scroll.y ? this.scroll.y : 0
      }
    }
  }
}
</script>

<style>
</style>