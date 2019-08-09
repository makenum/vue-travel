<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <h3 class="title">当前城市</h3>
        <ul class="city-list">
          <li class="item">
            <div class="item-inner">{{this.currentCity}}</div>
          </li>
        </ul>
      </div>
      <div class="area">
        <h3 class="title">热门城市</h3>
        <ul class="city-list">
          <li class="item" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="item-inner">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <h3 class="title">{{key}}</h3>
        <ul class="item-list">
          <li
            class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper)
      this.scroll.on('scrollStart', () => { })
    })
  }
}
</script>
<style lang="stylus" scoped>
.list
  background-color $colorWhite
  overflow hidden
  position absolute
  top 1.7rem
  bottom 0
  left 0
  right 0
  .title
    line-height 0.54rem
    background $bgColor
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .city-list
    display flex
    flex-wrap wrap
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .item
      width percentage((1 / 3))
      &-inner
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        position relative
        &:after
          content ''
          position absolute
          top 0
          left 0
          width 200%
          height 200%
          transform-origin 0 0
          border 1px solid $colorGrayLight
          transform scale(0.5)
          border-radius 0.1rem
          pointer-events none
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
      position relative
      &:after
        hairline(bottom, $colorLine)
</style>
