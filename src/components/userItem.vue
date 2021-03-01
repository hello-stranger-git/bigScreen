<template>
  <div class="userItem">
    <div class="top">
      <img :src="userData.icon"/>
    </div>
    <div class="name">
      <span>{{ userData.name }}</span>
    </div>
    <div class="time">
      <span>{{ userData.time }}</span>
    </div>
    <div class="status">
      <span style="color:#4699EB" v-if="userData.status">正常</span>
      <span style="color:#FA358A" v-else>迟到</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object
    }
  },
  data () {
    return {
      // boyIcon: require('@/assets/image/boy.png'),
      // girlIcon: require('@/assets/image/girl.png'),
      // timeIcon: require('@/assets/image/time.png')
    }
  }
}
</script>

<style lang="less" scoped>
.userItem{
  .rem(width,117px);
  text-align: center
}
.top{
  .rem(width,103px);
  .rem(height, 103px);
  margin: auto;
  &>img{
    .rem(width,103px);
    .rem(height, 103px)
  }
}
.name{
  .rem(margin-top,10px);
  // &>img{
  //   .rem(width,25px);
  //   .rem(height, 26px);
  //   vertical-align: middle;
  // }
  &>span{
    .rem(font-size,18px);
    .rem(font-weight,400);
    .rem(margin-left,12);
    vertical-align: middle;
    color: #EFFFFB;
  }
}
.time{
  .rem(margin-top,10px);
  &>span{
    .rem(font-size,18px);
    .rem(font-weight,400);
    .rem(margin-left,12);
    vertical-align: middle;
    color: #EFFFFB;
  }
}
.status{
  .rem(margin-top,10px);
  &>span{
    .rem(font-size,18px);
    .rem(font-weight,400);
    .rem(margin-left,12);
    vertical-align: middle;
  }
}
</style>
