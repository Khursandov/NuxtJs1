<template>
  <div>
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from '../components/Navbar'
import { store } from '../store'
export default {
  components: {
    Nav
  },
  created() {
    this.$store.dispatch('GetPost')
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
