<template>
  <cube-page type="" title="example/view">
    <div slot="content">
      <p>
        example view page
      </p>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from '../../components/cube-page.vue'
  import CubeView from '../../components/cube-view.vue'

  export default {
    data() {
      return {}
    },
    methods: {
    },
    components: {
      CubePage,
      CubeView
    }
  }
</script>
