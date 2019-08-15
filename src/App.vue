<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    watch:{
      $route(to){
        if(to.path !== '/home') gtag('event', 'screen_view', { 'screen_name': to.name});
      }
    }
  }
</script>

<style lang="less">

</style>
