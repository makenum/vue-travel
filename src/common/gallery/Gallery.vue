<template>
  <div class="container">
    <div class="gallery-mask" @click="handleGalleryClick"></div>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img :src="item" class="gallery-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.gallery-mask
  background #000
  width 100%
  height 100%
  position absolute
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
