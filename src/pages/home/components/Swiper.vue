<template>
  <div class="index-swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <div class="img-wrap">
          <img :src="item.imgUrl" class="swiper-img">
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.index-swiper >>> .swiper-pagination-bullet-active
  background #fff
.index-swiper >>> .swiper-container-horizontal > .swiper-pagination-bullets
  bottom 2px
.index-swiper
  .img-wrap
    position relative
    background $bgColor
    padding-bottom percentage((200 / 640))
  .swiper-img
    percent-img()
</style>