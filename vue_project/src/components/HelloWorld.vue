<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <cube-button>Button</cube-button>
    <cube-button type="submit">Submit Button</cube-button>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler">
    </cube-tab-bar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello world',
        selectedLabelDefault: 'Vip',
        tabs: [{
          label: 'Home',
          icon: 'cubeic-home'
        }, {
          label: 'Like',
          icon: 'cubeic-like'
        }, {
          label: 'Vip',
          icon: 'cubeic-vip'
        }, {
          label: 'Me',
          icon: 'cubeic-person'
        }]
      }
    },
    methods: {
      clickHandler(label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
      },
      changeHandler(label) {
        // if you clicked different tab, this methods can be emitted
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
