<template>
  <div class="userItem">
    <div class="top">
      <img :src="icon"/>
    </div>
    <div class="center">
      <img v-if="sex===1" :src="girlIcon">
      <img v-if="sex===0" :src="boyIcon">
      <span>{{ age }}</span>
    </div>
    <div class="bottom">
      <img :src="timeIcon">
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    sex: {
      type: Number// (0、男,1、女)
    },
    age: {
      type: String
    },
    time: {
      type: String
    }
  },
  data () {
    return {
      boyIcon: require('@/assets/image/boy.png'),
      girlIcon: require('@/assets/image/girl.png'),
      timeIcon: require('@/assets/image/time.png')
    }
  }
}
</script>

<style lang="less" scoped>
.rem(@name,@px){
  @{name}:unit((@px/192),rem)
}
.userItem{
  .rem(width,117px);
  text-align: center
}
.top{
  &>img{
    .rem(width,94px);
    .rem(height, 94px)
  }
}
.center{
  .rem(margin-top,12px);
  &>img{
    .rem(width,25px);
    .rem(height, 26px);
    vertical-align: middle;
  }
  &>span{
    .rem(font-size,18px);
    .rem(font-weight,400);
    .rem(margin-left,12);
    vertical-align: middle;
    color: #EFFFFB;
  }
}
.bottom{
  .rem(margin-top,12px);
  &>img{
    .rem(width,25px);
    .rem(height, 25px);
    vertical-align: middle;
  }
  &>span{
    .rem(font-size,18px);
    .rem(font-weight,400);
    .rem(margin-left,12);
    vertical-align: middle;
    color: #EFFFFB;
  }
}
</style>
