<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" class="header-right">
      <span>{{this.city}}</span>
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  align-items center
  height $headerHeight
  background $colorPrimary
  color $colorWhite
  &-left
    width 0.64rem
    line-height $headerHeight
    .back-icon
      text-align center
      font-size 0.4rem
  &-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-left 0.2rem
    padding-left 0.2rem
    background $colorWhite
    border-radius 0.1rem
    color $colorGrayLight
  &-right
    height 100%
    min-width 1.04rem
    padding 0 0.1rem
    text-align center
    color $colorWhite
    display flex
    align-items center
    .arrow-icon
      font-size 0.18rem
      margin-left 0.05rem
</style>
