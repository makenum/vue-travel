<template>
  <div>
    <div class="hot-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="item"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <h3 class="title">{{item.title}}</h3>
          <p class="desc">{{item.desc}}</p>
          <button class="button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.hot-title
  margin-top 0.2rem
  line-height 0.8rem
  background $bgColor
  text-indent 0.2rem
.item
  display flex
  padding 0.1rem
  position relative
  &:not(:last-child)
    &:after
      hairline(bottom, $colorLine)
      bottom 0
      left 0.2rem
  &-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  &-info
    flex 1
    padding 0.1rem
    min-width 0
    .title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
</style>
