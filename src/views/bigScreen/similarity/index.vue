 <!-- 相似度 -->
<template>
  <div class="similarity">
    <!-- 对比区域 -->
      <div class="similarity_top">
        <div class="top_img">
         <div>
           <img :src="similarity.character1.uimg" />
           <p>ID:{{similarity.character1.uname}}</p>
         </div>
         <div>
           <img :src="similarity.character2.uimg"/>
           <p>{{similarity.character2.uname}}</p>
          </div>
        </div>
        <div class="top_ratio">
          <span>相似度</span>
          <p>{{similarity.Similarity}}<span>%</span></p>
          </div>
      </div>
      <!-- 商品推荐区域 -->
      <div class="similarity_bottom">
     <div class="bottom_left">
       <img :src="similarity.wares.img"/>
     </div>
     <div class="bottom_right">
       <p>{{similarity.wares.name}}</p>
       <span>￥{{similarity.wares.price}}</span>
       <img :src="similarity.wares.QRcode"/>
     </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    similarity: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.similarity{
  overflow: hidden;
  border: 1px solid #FFFFFF;
  .rem(width,412.8px);
  .rem(height,413px);
  .rem(padding,12px);
}
// 对比区域
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
// 商品推荐区域
.similarity_bottom{
  .rem(padding-top,34px );
  display: flex;
}
.bottom_left{
  .rem(width, 216px);
  .rem(height, 148px);
  overflow: hidden;
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
