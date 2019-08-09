<template>
  <div>
    <div class="search-bar">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item"
          @click="handleCityClick(item.name)"
        >{{ item.name }}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
.search-bar
  padding 0.1rem
  background $colorPrimary
  .search-input
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.7rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    background #fff
    color #666
    position relative
    &:after
      hairline(bottom, $colorLine)
</style>
