<!--realTimeFlow-->
<template>
  <div class="contain">
    <div class="titleBox">
      <div class="realTimeFlow">
        NO.{{index+1}}  {{ title }}
      </div>
      <span>{{ count }}</span>
    </div>

    <div class="progress">
      <div
        class="current"
        :style="{ width: (count / total) * 100 + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    count: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 500
    },
    index: {
      type: Number
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  .rem(margin-bottom, 37px);
}
.titleBox {
  position: relative;
  color: #fff;
  .rem(font-size, 16px);

  .realTimeFlow {
    .rem(padding-left, 22px);
    .rem(padding-right, 16px);
    .rem(height, 21px);
    .rem(width, 322px);
    .rem(line-height, 21px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    position: absolute;
    .rem(right, 16px);
    .rem(top, 0);
  }
}

.progress {
  .rem(margin-left, 22px);
  .rem(margin-right, 16px);
  .rem(margin-top, 12px);
  .rem(height, 16px);
  background-color: #4b6586;
  .rem(border-radius, 8px);
  overflow: hidden;
  .current {
    width: 50%;
    height: 100%;
    .rem(border-radius, 8px);
    background-image: linear-gradient(to right, #4080fe, #57e6b1);
  }
}
</style>
