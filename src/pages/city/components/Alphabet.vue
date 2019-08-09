<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :class="{active:item === indexPrev}"
      :key="item"
      :ref="item"
      @click="handleLetterClick(item,$event)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove(item,$event)"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
      indexPrev: ''
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (item, e) {
      this.indexPrev = item
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (item, e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            this.indexPrev = this.letters[index]
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0.1rem
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $colorPrimary
    &.active
      background-color $colorPrimary
      color $colorWhite
      border-radius 50%
</style>
