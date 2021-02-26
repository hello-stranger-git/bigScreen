<template>
  <div>
    <span class="pro" :style="{'background':color}"></span>
    <span class="name">{{ leg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    },
    leg: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.rem(@name,@px){
    @{name} : unit( (@px / 192),rem);
}
.pro{
  display: inline-block;
  .rem(width,38px);
  .rem(height,9px);
  background: #CE5A60;
  .rem(border-radius,5px);
}
.name{
  .rem(font-size,14px);
  font-weight: 400;
  color: #EFFFFB;
  .rem(margin-left, 9px)
}
</style>
