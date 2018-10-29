<template>
  <div id="app">
    <header class="cube-bar">
      <h1>cube-ui</h1>
    </header>
    <section class="cube-content" ref="mfct">

      <!--<cube-button @click="goTo('a/sub')">a</cube-button>-->
      <!--<cube-button @click="goTo('b')">b</cube-button>-->


      <!--<router-link class="link" :to="component.path">{{component.text}}<i-->
        <!--class="cubeic-arrow"></i>-->
      <!--</router-link>-->


        <router-link to='index/view'><cube-button>index/view page </cube-button></router-link>
        <router-link to='about'><cube-button>about page</cube-button></router-link>
      <cube-button @click="showAlert">Dialog - alert</cube-button>


    </section>
    <cube-view></cube-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubeView from './components/cube-view.vue'

  export default {
    data() {
      return {
      }
    },
    components: {
      CubeView
    },
    methods:{
      showAlert() {
        this.dialog = this.$createDialog({
          type: 'alert',
          title: '我是标题',
          content: '我是内容',
          icon: 'cubeic-alert'
        })
        this.dialog.show()
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body, #app
    height: 100%

  body
    background-color: #fff
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

</style>
