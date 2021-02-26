<template>
  <div class="bigScreen">
    <div class="top">
      <div class="left">
        <span class="time">2021年2月18日</span>
      </div>
      <div class="line"></div>
      <div class="center" @click="toggleFullscreen">
        <span>乐店客好望</span>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="center">
      <div class="left">
        <div class="leftTitle">
          <span>客群特征</span>
        </div>
        <div class="leftLenged">
          <Lenged color="#CE5A60" leg="老年"/>
          <Lenged color="#0092FF" leg="中年"/>
          <Lenged color="#1BC85E" leg="青年"/>
          <Lenged color="#FDE545" leg="少年"/>
        </div>
        <div class="features">
          <FeaturesChart/>
        </div>
      </div>
      <div class="center">
        <!-- <div class="centerTitle">
          <span>今日进店</span>
        </div>
        <el-row :gutter="20">
          <el-col v-for="item in userData" :key="item.id" :span="6">
            <UserItem   :icon="item.icon" :sex="item.sex" :age="item.age" :time="item.time"/>
          </el-col>
        </el-row> -->
        <div class="centerLeft">
          <!-- <div class="centerLeftTitle">
            <span>客流天气占比</span>
          </div> -->
          <div class="type"></div>
          <div class="message"></div>
        </div>
        <div class="centerRight">
          <!-- <div class="centerRightTitle">
            <span>实时出入口客流量排行</span>
          </div> -->
        </div>

      </div>
      <div class="right">
        <div class="rightTitle">
          <span>今日客流趋势</span>
        </div>
        <div class="rightLenged">
          <Lenged color="#CE5A60" leg="老年"/>
          <Lenged color="#0092FF" leg="中年"/>
          <Lenged color="#1BC85E" leg="青年"/>
        </div>
        <div class="flow">
          <FlowChart/>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="leftTitle">
          <span>客流单价分析</span>
        </div>
      </div>
      <!-- <div class="center"> -->
        <!-- <div class="centerLeft">
          <div class="centerLeftTitle">
            <span>客流天气占比</span>
          </div>
        </div> -->
        <!-- <div class="centerRight">
          <div class="centerRightTitle">
            <span>实时出入口客流量排行</span>
          </div>
        </div>
      </div> -->
      <!-- <div class="right">
          <div class="rightTitle">
            <span>30天客流趋势</span>
          </div>
      </div> -->
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Lenged from '@/components/lenged.vue'
// import UserItem from '@/components/userItem'
import FeaturesChart from './features'
import FlowChart from './flow'
export default {
  data () {
    return {
      isFullScreen: false,
      userData: [
        {
          id: 1,
          icon: require('@/assets/image/user1.png'),
          sex: 0,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 2,
          icon: require('@/assets/image/user2.png'),
          sex: 1,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 3,
          icon: require('@/assets/image/user1.png'),
          sex: 0,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 4,
          icon: require('@/assets/image/user2.png'),
          sex: 1,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 5,
          icon: require('@/assets/image/user1.png'),
          sex: 0,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 6,
          icon: require('@/assets/image/user2.png'),
          sex: 1,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 7,
          icon: require('@/assets/image/user2.png'),
          sex: 1,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 8,
          icon: require('@/assets/image/user1.png'),
          sex: 0,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 9,
          icon: require('@/assets/image/user1.png'),
          sex: 0,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 10,
          icon: require('@/assets/image/user2.png'),
          sex: 1,
          age: '35~50岁',
          time: '19:45:18'
        },
        {
          id: 11,
          icon: require('@/assets/image/user1.png'),
          sex: 0,
          age: '35~50岁',
          time: '19:45:18'
        }
      ],
      imgNumber: 1, // 模拟更换头像
      userDataClear: null
    }
  },
  components: {
    Lenged,
    // UserItem,
    FeaturesChart,
    FlowChart
  },
  methods: {
    toggleFullscreen () {
      if (this.isFullScreen) {
        this.exitFullScreen()
      } else {
        this.launchFullScreen(document.documentElement)
      }
      this.isFullScreen = !this.isFullScreen
    },
    launchFullScreen (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },
    exitFullScreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    // 模拟后台改变今日进店用户
    userDataAxios () {
      this.userDataClear = setInterval(() => {
        this.userData.splice(0, 1)
        if (this.imgNumber === 1) {
          this.imgNumber = 2
        } else {
          this.imgNumber = 1
        }
        this.userData.push({
          id: new Date().getTime(),
          icon: require('@/assets/image/user' + this.imgNumber + '.png'),
          sex: (this.imgNumber - 1),
          age: '35~50岁',
          time: '19:45:18'
        })
      }, 1500)
    }
  },
  mounted () {
    this.userDataAxios()
  },
  beforeUpdate () {
    this.userDataClear = null
  }

}
</script>

<style lang="less" scoped>
.rem(@name,@px){
    @{name} : unit( (@px / 192),rem);
}
.centent{
    .rem(font-size,16px);
    background: #ccc;
}
.bigScreen{
  position: relative;
}
.top{
  position: relative;
  .left{
      position: absolute;
      .rem(width,752px);
      .rem(height,45px);
      .rem(top,38px);
      .rem(left,9px);
      background-image:url('../../assets/image/topleft.png');
      background-repeat:no-repeat; /** 不重复*/
      background-size:contain; /**等比例缩放*/
      .time{
        position: absolute;
        .rem(top,10px);
        .rem(left,19px);
        .rem(font-size,18px);
        font-weight: bold;
        color: #EFFFFB;
      }
  }
  .line{
      background-image:url('../../assets/image/line.png');
      background-repeat:no-repeat; /** 不重复*/
      background-size:contain; /**等比例缩放*/
      .rem(height,54px);
      position: absolute;
      .rem(top,29px);
      width: 100%;
  }
  .center{
      cursor: pointer;
      .rem(width,456px);
      .rem(height,66px);
      position: absolute;
      .rem(top,10px);
      .rem(left,732px);
      background-image:url('../../assets/image/topcenter.png');
      background-repeat:no-repeat; /** 不重复*/
      background-size:contain; /**等比例缩放*/
      position: absolute;
      span{
        position: absolute;
        .rem(bottom,15px);
        .rem(left,131px);
        .rem(font-size,36px);
        font-weight: bold;
        color: #1E86DF;
      }
  }
  .right{
      .rem(width,752px);
      .rem(height,45px);
      position: absolute;
      .rem(top,38px);
      .rem(left,1159px);
      background-image:url('../../assets/image/topright.png');
      background-repeat:no-repeat; /** 不重复*/
      background-size:contain; /**等比例缩放*/
  }
}
.center{
  &>div{
    background: #101638;
  }
  position: relative;
  .rem(top,92px);
  .left{
    position: absolute;
    .rem(width,547px);
    .rem(height,504px);
    .rem(top,0px);
    .rem(left,9px);
    .leftTitle{
      span{
        .rem(font-size,24px);
        font-weight: 400;
        color: #259CFF;
        position: absolute;
      .rem(top,21px);
      .rem(left,21px);
      }
    }
    .leftLenged{
      position: absolute;
      .rem(top,86px);
      width: 100%;
      display: flex;
      justify-content: space-between;
      .rem(padding-left,26px);
      .rem(padding-right,26px);
    }
    .features{
      position: absolute;
      .rem(top,176px);
      .rem(width, 547px);
      .rem(height, 282px)
    }
  }
  .center{
    // position: absolute;
    // overflow: hidden;
    // .rem(width,796px);
    // .rem(height,504px);
    // .rem(top,0rem);
    // .rem(left,565px);
    // .centerTitle{
    //   span{
    //     .rem(font-size,24px);
    //     font-weight: 400;
    //     color: #259CFF;
    //     position: absolute;
    //   .rem(top,21px);
    //   .rem(left,21px);
    //   }
    // }
    // .el-row{
    //   position: absolute;
    //   .rem(top,90px);
    //   .el-col{
    //     &:nth-child(n+5){
    //       .rem(margin-top,40px)
    //     }
    //   }
    // }
    // /deep/.userItem{
    //   margin: auto;
    // }

    position: absolute;
    .rem(width,796px);
    .rem(height,504px);
    .rem(top,0rem);
    .rem(left,565px);
    background: #0b0f28;
    &>div{
      background: #101638;
    }
    .centerLeft{
      position: absolute;
      .rem(width,395px);
      .rem(height,504px);
      .rem(top,0px);
      .rem(left,0px);
      .centerLeftTitle{
        span{
          .rem(font-size,24px);
          font-weight: 400;
          color: #259CFF;
          position: absolute;
        .rem(top,21px);
        .rem(left,21px);
        }
      }
      .type{

      }

    }
    .centerRight{
      position: absolute;
      .rem(width,392px);
      .rem(height,504px);
      .rem(top,0px);
      .rem(right,0px);
      .centerRightTitle{
        span{
          .rem(font-size,24px);
          font-weight: 400;
          color: #259CFF;
          position: absolute;
        .rem(top,21px);
        .rem(left,21px);
        }
      }
    }
  }
  .right{
    position: absolute;
    .rem(width,541px);
    .rem(height,504px);
    .rem(top,0rem);
    .rem(left,1370px);
    .rightTitle{
      span{
        .rem(font-size,24px);
        font-weight: 400;
        color: #259CFF;
        position: absolute;
      .rem(top,21px);
      .rem(left,21px);
      }
    }
    .rightLenged{
      position: absolute;
      .rem(width,280px);
      .rem(top,26px);
      .rem(right,16px);
      display: flex;
      justify-content: space-between;
    }
    .flow{
      position: absolute;
      .rem(top,29px);
      .rem(width, 541px);
      .rem(height, 470px)
    }
  }
}
.bottom{
  position: relative;
  .rem(top,605px);
  &>div{
    background: #101638;
  }
  .left{
    position: absolute;
    .rem(width,547px);
    .rem(height,462px);
    .rem(top,0rem);
    .rem(left,9px);
    .leftTitle{
      span{
        .rem(font-size,24px);
        font-weight: 400;
        color: #259CFF;
        position: absolute;
      .rem(top,21px);
      .rem(left,21px);
      }
    }
  }
  // .center{
  //   position: absolute;
  //   .rem(width,796px);
  //   .rem(height,462px);
  //   .rem(top,0rem);
  //   .rem(left,565px);
  //   background: #0b0f28;
  //   &>div{
  //     background: #101638;
  //   }
    // .centerLeft{
    //   position: absolute;
    //   .rem(width,394px);
    //   .rem(height,462px);
    //   .rem(top,0px);
    //   .rem(left,0px);
    //   .centerLeftTitle{
    //     span{
    //       .rem(font-size,24px);
    //       font-weight: 400;
    //       color: #259CFF;
    //       position: absolute;
    //     .rem(top,21px);
    //     .rem(left,21px);
    //     }
    //   }
    // }
  //   .centerRight{
  //     position: absolute;
  //     .rem(width,394px);
  //     .rem(height,462px);
  //     .rem(top,0px);
  //     .rem(right,0px);
  //     .centerRightTitle{
  //       span{
  //         .rem(font-size,24px);
  //         font-weight: 400;
  //         color: #259CFF;
  //         position: absolute;
  //       .rem(top,21px);
  //       .rem(left,21px);
  //       }
  //     }
  //   }
  // }
  // .right{
  //   position: absolute;
  //   .rem(width,541px);
  //   .rem(height,462px);
  //   .rem(top,0rem);
  //   .rem(left,1370px);
  //   .rightTitle{
  //     span{
  //       .rem(font-size,24px);
  //       font-weight: 400;
  //       color: #259CFF;
  //       position: absolute;
  //     .rem(top,21px);
  //     .rem(left,21px);
  //     }
  //   }
  // }

  .right{
    position: absolute;
    .rem(width,1346px);
    .rem(height,462px);
    .rem(top,0rem);
    .rem(left,565px);
  }
}
</style>
