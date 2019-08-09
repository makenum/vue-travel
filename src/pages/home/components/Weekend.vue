<template>
  <div>
    <div class="hot-title">周末去哪儿</div>
    <ul>
      <router-link tag="li" to="/" class="item" v-for="item of list" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.hot-title
  line-height 0.8rem
  background $bgColor
  text-indent 0.2rem
.item
  &-img
    position relative
    background-color $bgColor
    padding-bottom percentage((214 / 577))
    img
      percent-img()
  &-info
    padding 0.2rem
    .title
      font-size 0.32rem
      ellipsis()
    .desc
      line-height 0.4rem
      color $colorGrayLight
      ellipsis()
</style>
