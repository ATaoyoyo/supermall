import BackToTop from '../components/content/backToTop/BackToTop'
export const backToTop = {
  components: {
    BackToTop
  },
  data() {
    return {
      isShowTop: false
    }
  },
  methods: {
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShopTop(position) {
      this.isShowTop = -position.y > 1000
    }
  }
}
