<template>
  <div>
    <ul class="icons">
      <router-link tag="li" to="/" v-for="item of list" :key="item.id" class="icon">
        <div class="icon-img">
          <img :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.icons
  display flex
  flex-wrap wrap
  padding 0.2rem 0
  .icon
    width percentage((1 / 4))
    padding 0.2rem
    &-img
      width 1.2rem
      margin 0 auto 0.1rem
    &-desc
      text-align center
      ellipsis()
</style>
