<template>
  <cube-page type="" title="example">
    <div slot="content">
      <p>
        example page
      </p>
      <br>
      <router-link to='/example/view'>
        <cube-button>go to example/view page</cube-button>
      </router-link>
      <br>
      <cube-button @click="goTo('view')">go to example/view page</cube-button>
      <p>
        cube-view 需要放在这里,在属性为 slot="content" 的标签里.这样子级别路由 /example/view 才能正常跳转并显示
      </p>
      <cube-view><!--  cube-view 需要放在这里(在属性为 slot="content" 的标签里).这样子级别路由 /example/view 才能正常跳转并显示 --></cube-view>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from '../../components/cube-page.vue'
  import CubeView from '../../components/cube-view.vue'

  export default {
    data () {
      return {}
    },
    methods: {
      goTo (subPath) {
        this.$router.push('/example/' + subPath)
      }
    },
    components: {
      CubePage,
      CubeView
    }
  }
</script>