 <!-- 相似度 -->
<template>
  <div class="similarity">
    <!-- 对比区域 -->
      <div class="similarity_top">
        <div class="top_img">
         <div>
           <img :src="nowImg" />
           <p>ID:25251254</p>
         </div>
         <div>
           <img :src="dataImg"/>
           <p>呱呱蛙</p>
          </div>
        </div>
        <div class="top_ratio">
          <span>相似度</span>
          <p>75<span>%</span></p>
          </div>
      </div>
      <!-- 商品推荐区域 -->
      <div class="similarity_bottom">
     <div class="bottom_left">
       <img :src="Alienware"/>
     </div>
     <div class="bottom_right">
       <p>外星人Alienware m15</p>
       <span>￥14999.00</span>
       <img :src="ewm"/>
     </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataImg: require('@/assets/image/similarity/data.png'),
      nowImg: require('@/assets/image/similarity/now.png'),
      Alienware: require('@/assets/image/similarity/Alienware.png'),
      ewm: require('@/assets/image/similarity/ewm.png')
    }
  }
}
</script>

<style lang="less" scoped>
// .similarity{
//   // border: 1px solid red;
//   display: flex;
//   & > :not(:first-child){
//    .rem( margin-left, 19px);
//   }
// }
.similarity{
  overflow: hidden;
  border: 1px solid #FFFFFF;
  .rem(width,412.8px);
  .rem(height,413px);
  .rem(padding,12px);
}
.similarity_top{
  position: relative;
}
.top_img{
  display: flex;
  &> :first-child{
    .rem(margin-right,11px )
  }
  &>div{
  .rem(width,188.7px);
  .rem(height,189px);
   overflow: hidden;
   position: relative;
   p{
     position: absolute;
     bottom: 0;
     .rem(padding, 10px);
     width: 100%;
     text-align: center;
     background-color: #000000;
     color: #EFFFFB;
     opacity: 0.6;
    .rem(font-size,16px);
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
   }
  }
  img{
    width: 100%;
    height: 100%;
  }
}
.top_ratio{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-35%);
  .rem(width,94px);
  .rem(height, 94px);
  background-color: #0092FF;
  border-radius: 50%;
  text-align: center;
  .rem(padding, 11px);
  color: #FFFFFF;
   &>span{
    .rem(font-size,16px);
    display: inline-block;
    }
  p{
    .rem(font-size,40px);
     span{
    .rem(font-size,20px);
    }
  }
}
.similarity_bottom{
  .rem(padding-top,34px );
  display: flex;
}
.bottom_left{
  .rem(width, 216px);
  .rem(height, 148px);
  img{
    width: 100%;
  }
}
.bottom_right{
.rem(width,169px) ;
  p{
    .rem(font-size,14px);
    color: #EFFFFB;
    .rem(margin-top,6px) ;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  span{
    display: block;
    .rem(margin-top, 9px);
    .rem(font-size, 18px);
    color: #F12D42;
    font-weight: bold;
  }
  img{
    .rem(width, 96px);
    .rem(height, 96px);
    float: right;
    .rem(margin-top,11px) ;
  }
}
</style>
