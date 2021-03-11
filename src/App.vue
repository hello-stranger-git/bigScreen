<template>
  <div id="app">
    <BigScreen/>
  </div>
</template>
<script>
import BigScreen from '@/views/bigScreen'
export default {
  components: {
    BigScreen
  }
}
</script>
<style lang="less">
#app{
  .rem(font-size,12px);
}
</style>
