<template>
  <div id="app">
    <header class="cube-bar">
      <h1>cube-ui 首页</h1>
    </header>
    <section class="cube-content tab-composite-view" ref="mfct">


      <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 关注 -->
          <cube-slide-item>

          <cube-scroll :data="followersData" :options="scrollOptions">
					  <ul class="list-wrapper">
						<li v-for="(item, index) in followersData" class="list-item" :key="index">
						  <div class="top">
							<img :src="item.avatar" class="avatar">
							<span class="time">{{resolveTitle(item)}}</span>
						  </div>
						  <div class="middle is-bold line-height">{{item.question}}</div>
						  <div>{{resolveQuestionFollowers(item)}}</div>
						</li>
					  </ul>
					</cube-scroll>
          </cube-slide-item>
          <!-- 推荐 -->
          <cube-slide-item>

            <cube-scroll :data="recommendData" :options="scrollOptions">

                <div style="padding: 8px">
                    <router-link to='/example'>
                        <cube-button>example page</cube-button>
                    </router-link>
                    <br>
                    <router-link to='/other'>
                        <cube-button>other page</cube-button>
                    </router-link>
                </div>

              <ul class="list-wrapper">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div class="top is-black is-bold line-height">
                    {{item.question}}
                  </div>
                  <div class="middle is-grey line-height">{{item.content}}</div>
                  <div>{{resolveQuestionFollowers(item)}}</div>
                </li>
              </ul>

            </cube-scroll>
          </cube-slide-item>
          <cube-slide-item>
            <cube-scroll :data="hotData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in hotData" class="list-item" :key="index">
                  <div class="hot-title">
                    <span class="hot-sequence">{{item.sequence}}</span>
                    <span></span>
                    {{item.label}}
                  </div>
                  <div class="hot-content is-bold is-black">{{item.question}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>

    </section>
    <cube-view></cube-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubePage from './components/cube-page.vue'
  import CubeView from './components/cube-view.vue'

  // import {FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA} from './data/tab-bar'
  import {findIndex} from './common/helpers/util'

  export default {
    data () {
      return {
        selectedLabel: '推荐',
        disabled: false,
        debut: [],
        tabLabels: [{
          label: '关注'
        }, {
          label: '推荐'
        }, {
          label: '热榜'
        }],
        loop: false,
        autoPlay: false,
        showDots: false,
        slideOptions: {
          listenScroll: true,
          probeType: 3,
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        // followersData: FOLLOWERS_DATA,
        // recommendData: RECOMMEND_DATA,
        // hotData: HOT_DATA
		  followersData: [],
		  recommendData: [],
		  hotData: []
      }
    },
	  mounted: function () {
		  let that = this;

		  //服务器已经开启跨域请求

/*
		  this.$http({
			  method: 'get',
			  url: 'http://dump123.cn/apix/followers',
			  data: {
				  // name: 'virus'
			  }
		  }).then(function (response) {
              alert(response.data)
		  },function(){
		    alert('error:http://dump123.cn/apix/followers')
		  })
*/



		  //关注数据
		  this.$http.get('http://dump123.cn/apix/followers', {}).then(function (response) {
			  that.followersData = response.data
		  }, function (response) {
			  // 发生错误
              alert('error:http://dump123.cn/apix/followers---'+response.data)
		  });

		  //推荐数据
		  this.$http.get('http://dump123.cn/apix/recommends', {}).then(function (response) {
			  that.recommendData = response.data
		  }, function (response) {
			  // 发生错误
			  alert('error:http://dump123.cn/apix/recommends---'+response.data)
              for (var index in response) {
              	alert(index+':'+response[index])
              }
		  });

		  //热榜数据
		  this.$http.get('http://dump123.cn/apix/hots', {}).then(function (response) {
			  that.hotData = response.data

		  }, function (response) {
			  // 发生错误
			  alert('error:http://dump123.cn/apix/hots---'+response)
			  for (var index in response) {
				  alert(index+':'+response[index])
			  }
		  });


    },
    methods: {
      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        console.log(current)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      },
      resolveTitle (item) {
        return `${item.name}关注了问题 · ${item.postTime} 小时前`
      },
      resolveQuestionFollowers (item) {
        return `${item.answers} 赞同 · ${item.followers} 评论`
      }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    },
    components: {
      CubePage,
      CubeView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body, #app
    height: 100%

  body
    background-color: #f5f5f5
    overflow: hidden

  .cube-bar
    z-index: 10
    position: absolute
    right: 0
    left: 0
    height: 44px
    line-height: 44px
    text-align: center
    background-color: #EDF0F4
    box-shadow: 0 2px 1px #e9eaea
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    h1
      font-size: 18px
      font-weight: 500

  .cube-content
    position: absolute
    top: 44px
    left: 0
    right: 0
    bottom: 0
    overflow: scroll
    -webkit-overflow-scrolling: touch

  /* 覆盖样式 */
  .tab-composite-view
    > .wrapper
      > .content
        margin: 0

  .tab-composite-view
    .cube-tab-bar
      background-color: white
    .cube-tab, .cube-tab_active
      color: black
    .cube-tab-bar-slider
      background-color: black
    .tab-slide-container
      position: fixed
      top: 74px
      left: 0
      right: 0
      bottom: 0
    .list-wrapper
      overflow: hidden
      li
        padding: 15px 10px
        margin-top: 10px
        text-align: left
        background-color: white
        font-size: 14px
        color: #999
        white-space: normal
        .line-height
          line-height: 1.5
        .is-black
          color: black
        .is-grey
          color: #999
        .is-bold
          font-weight: bold
        .top
          display: flex
          .avatar
            width: 15px
            height: 15px
            margin-right: 2px
            border-radius: 100%
          .time
            flex: 1
        .middle
          display: flex
          margin: 10px 0
          color: black
        .hot-title
          display: flex
          align-items: center
          font-size: 12px
          .hot-sequence
            display: inline-block
            margin-right: 2px
            padding: 3px 6px
            border-radius: 2px
            background-color: darkgoldenrod
            color: white
        .hot-content
          margin-top: 15px

</style>
