<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="galleryImgs"></detail-banner>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      sightName: '',
      galleryImgs: [],
      list: []
    }
  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios
        .get('/api/detail', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 100vh
</style>
