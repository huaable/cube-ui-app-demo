<template>
  <cube-page type="" title="other">
    <div slot="content">
      <p>
        other page
      </p>
      <router-link to='/example/view'>
        <cube-button>example/view page</cube-button>
      </router-link>
    </div>
  </cube-page>
</template>
<script>
  import CubePage from '../../components/cube-page.vue'
  import JsonView from '../../components/json-view.vue'

  export default {
    data() {
      return {}
    },
    methods: {
    },
    components: {
      CubePage,
      JsonView
    }
  }
</script>
