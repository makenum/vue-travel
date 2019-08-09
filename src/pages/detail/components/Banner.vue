<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
        </div>
      </div>
    </div>
    <Fade>
      <common-gallery v-show="showGallery" :imgs="bannerImgs" @close="handleGalleryClose"></common-gallery>
    </Fade>
  </div>
</template>
<script>
import Fade from '@/common/animation/Fade'
import CommonGallery from '@/common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    bannerImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    Fade
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-to
  opacity 0
.banner
  position relative
  padding-bottom 55%
  .banner-img
    percent-img()
  .banner-info
    display flex
    padding 0 0.2rem
    align-items center
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-tittle
      flex 1
      font-size 0.3rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>
