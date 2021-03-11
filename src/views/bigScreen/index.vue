<template>
  <div class="bigScreen">
    <div class="top">
      <div class="left">
        <span class="time">2021年2月18日</span>
      </div>
      <div class="line"></div>
      <div class="center" @click="toggleFullscreen">
        <span>华为店望</span>
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
          <div class="type">
            <div class="status">
              <!-- <img :src="status?normal:abnormal"> -->
              <img :src="icon">
              <p v-if="status" class="normal">正常</p>
              <p v-else  class="abnormal">迟到</p>
            </div>
            <div class="message">
              <div>
                <span>姓名</span>
                <span>{{ kqData.name }}</span>
              </div>
              <div>
                <span>考勤时间</span>
                <span>{{ kqData.startTime }}</span>
              </div>
              <div>
                <span>上班时间</span>
                <span>{{ kqData.endTime }}</span>
              </div>
            </div>
          </div>
          <div class="message"></div>
        </div>
        <div class="centerRight">
          <el-row :gutter="20">
            <el-col v-for="item in userData" :key="item.id" :span="8">
              <UserItem :userData="item"/>
            </el-col>
          </el-row> -->
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
        <div class="rightLenged">
          <Lenged color="#57E6B1" leg="销售额"/>
          <Lenged color="#FE38A7" leg="客流人数"/>
          <!-- <div class="priceLenged">
            <span>

            </span>
            <span>客单价</span>
          </div> -->
        </div>
        <div class="leftcontext">
          <FlowPrice/>
        </div>
      </div>
      <div class="center">
        <div class="centerLeft">
          <div class="centerLeftTitle">
            <span>客流天气占比</span>
          </div>
          <div class="centerLeftLenged">
            <Lenged color="#1BC85E" leg="多云"/>
            <Lenged color="#FDE545" leg="晴天"/>
            <Lenged color="#0092FF" leg="雾天"/>
            <Lenged color="#57E6B1" leg="有雨"/>
            <Lenged color="#FF9E2B" leg="下雪"/>
          </div>
          <div class="centerLeftContext">
            <FlowWeather/>
          </div>
        </div>
        <div class="centerRight">
          <div class="centerRightTitle">
            <span>实时出入口客流量排行</span>
          </div>
          <div class="centerRightContext">
            <RealTimeFlow v-for="(item,i) in currentFlow" :key="i" :title="item.title" :count="item.count" :total="totalCount" :index="i"></RealTimeFlow>
          </div>
        </div>
      </div>
      <div class="right">
          <div class="rightTitle">
            <span>店外客流趋势</span>
          </div>
          <div class="rightContext">
            <OutFlow/>
          </div>
      </div>
      <!-- <div class="right">
          <Similarity v-for="item in similarityData" :key="item.id" :similarity="item.similarityItem"/>
      </div> -->
    </div>
  </div>
</template>

<script>
import Lenged from '@/components/lenged.vue'
import UserItem from '@/components/userItem'
import FeaturesChart from './features'
import FlowChart from './flow'
import FlowWeather from './flowWeather'
import RealTimeFlow from './realTimeFlow'
// import Similarity from './similarity'
import FlowPrice from './flowPrice'
import OutFlow from './outFlow'
export default {
  data () {
    return {
      isFullScreen: false,
      userData: [
        {
          id: 1,
          icon: require('@/assets/image/kq/now.png'),
          name: '廖某某',
          age: '35~50岁',
          time: '19:45:18',
          status: 1
        }
        // {
        //   id: 2,
        //   icon: require('@/assets/image/kq/now.png'),
        //   name: '廖某某',
        //   age: '35~50岁',
        //   time: '19:45:18',
        //   status: 1
        // },
        // {
        //   id: 3,
        //   icon: require('@/assets/image/kq/now.png'),
        //   name: '廖某某',
        //   age: '35~50岁',
        //   time: '19:45:18',
        //   status: 1
        // },
        // {
        //   id: 4,
        //   icon: require('@/assets/image/kq/now.png'),
        //   name: '廖某某',
        //   age: '35~50岁',
        //   time: '19:45:18',
        //   status: 1
        // },
        // {
        //   id: 5,
        //   icon: require('@/assets/image/kq/now.png'),
        //   name: '廖某某',
        //   age: '35~50岁',
        //   time: '19:45:18',
        //   status: 1
        // },
        // {
        //   id: 6,
        //   icon: require('@/assets/image/kq/now.png'),
        //   name: '廖某某',
        //   age: '35~50岁',
        //   time: '00:45:18',
        //   status: 1
        // }
      ],
      imgNumber: 1, // 模拟更换头像
      userDataClear: null,
      status: true,
      normal: require('@/assets/image/kq/normal.png'),
      abnormal: require('@/assets/image/kq/abnormal.png'),
      icon: require('@/assets/image/kq/now.png'),
      kqData: {
        name: '某某某',
        startTime: '08:52:12',
        endTime: '09:00:00'
      },
      // 相似度对比数据
      similarityData: [
        {
          id: 1,
          similarityItem: {
            character1: {
              id: 1,
              uname: '25251254',
              uimg: require('@/assets/image/similarity/now.png')
            },
            character2: {
              id: 2,
              uname: '呱呱蛙',
              uimg: require('@/assets/image/similarity/data.png')
            },
            Similarity: 75,
            wares: {
              id: 1,
              name: '外星人Alienware m15',
              price: '14999.00',
              img: require('@/assets/image/similarity/Alienware.png'),
              QRcode: require('@/assets/image/similarity/ewm.png')
            }
          }
        },
        {
          id: 2,
          similarityItem: {
            character1: {
              id: 1,
              uname: '25251254',
              uimg: require('@/assets/image/similarity/now.png')
            },
            character2: {
              id: 2,
              uname: '呱呱蛙',
              uimg: require('@/assets/image/similarity/data.png')
            },
            Similarity: 95,
            wares: {
              id: 2,
              name: '外星人Alienware m15',
              price: '14999.00',
              img: require('@/assets/image/similarity/Alienware.png'),
              QRcode: require('@/assets/image/similarity/ewm.png')
            }
          }
        },
        {
          id: 3,
          similarityItem: {
            character1: {
              id: 1,
              uname: '25251254',
              uimg: require('@/assets/image/similarity/now.png')
            },
            character2: {
              id: 3,
              uname: '呱呱蛙',
              uimg: require('@/assets/image/similarity/data.png')
            },
            Similarity: 75,
            wares: {
              id: 2,
              name: '外星人Alienware m15',
              price: '14999.00',
              img: require('@/assets/image/similarity/Alienware.png'),
              QRcode: require('@/assets/image/similarity/ewm.png')
            }
          }
        }
      ],
      currentFlow: [{ title: '二楼南扶梯西', count: 256 }, { title: '微店货梯门', count: 101 }, { title: '正大门', count: 155 }, { title: '二楼北扶梯东', count: 65 }],
      totalCount: 500
    }
  },
  components: {
    Lenged,
    UserItem,
    FeaturesChart,
    FlowChart,
    // Similarity,
    FlowPrice,
    FlowWeather,
    RealTimeFlow,
    OutFlow
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
    }
    // 模拟后台改变今日进店用户
    // userDataAxios () {
    //   this.userDataClear = setInterval(() => {
    //     this.userData.splice(0, 1)
    //     if (this.imgNumber === 1) {
    //       this.imgNumber = 2
    //     } else {
    //       this.imgNumber = 1
    //     }
    //     this.userData.push({
    //       id: new Date().getTime(),
    //       icon: require('@/assets/image/user' + this.imgNumber + '.png'),
    //       sex: (this.imgNumber - 1),
    //       age: '35~50岁',
    //       time: '19:45:18'
    //     })
    //   }, 1500)
    // }

  },
  mounted () {
    // this.userDataAxios()
    this.userDataClear = setInterval(() => {
      if (this.userData.length >= 6) {
        this.userData.pop()
        this.userData.unshift({
          id: new Date().getTime(),
          icon: require('@/assets/image/kq/now.png'),
          name: '廖某某',
          age: '35~40',
          time: '08:52:12',
          status: 1
        })
      } else {
        this.userData.unshift({
          id: new Date().getTime(),
          icon: require('@/assets/image/kq/now.png'),
          name: '廖某某',
          age: '35~40',
          time: '08:52:12',
          status: 1
        })
      }
    }, 2000)
    // 动态实时出入口客流排行
    setInterval(() => {
      this.totalCount = 0
      this.currentFlow.forEach((item) => {
        item.count = Math.floor(Math.random() * 300)
        this.totalCount += item.count
      })
      this.currentFlow.sort((a, b) => {
        return b.count - a.count
      })
    }, 2000)
  },
  beforeUpdate () {
    this.userDataClear = null
  }

}
</script>

<style lang="less" scoped>
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
        position: absolute;
        .rem(top,80px);
        width: 100%;
        text-align: center;
        .status{
          img{
            .rem(width,114px);
            .rem(height,114px)
          }
          p{
            .rem(margin-top,18px)
          }
          .normal{
            .rem(font-size,20px);
            font-weight: bold;
            color: #4699EB;
          }
          .abnormal{
            .rem(font-size,20px);
            font-weight: bold;
            color:#FA358A;
          }
        }
        .message{
          .rem(margin-top,55px);
          &>div{
            .rem(padding-bottom,23px);
            .rem(margin-left,22px);
            .rem(margin-right,22px);
            display:flex;
            justify-content: space-between;
            .rem(font-size,18px);
            font-weight: 400;
            color: #EFFFFB;
            &:nth-child(n+2){
              .rem(margin-top,24px)
            }
            box-sizing: border-box;
            border-bottom: 1px dotted #FFFFFF;
          }
        }
      }

    }
    .centerRight{
      position: absolute;
      .rem(width,392px);
      .rem(height,504px);
      .rem(top,0px);
      .rem(right,0px);
      .rem(padding-top,37px);
      .rem(padding-bottom,47px);
      .rem(padding-left,22px);
      .rem(padding-right,24px);
      overflow: hidden;
      .el-col{
        &:nth-child(n+4){
          .rem(margin-top,40px)
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
    .rightLenged{
      position: absolute;
      .rem(width,310px);
      .rem(top,26px);
      .rem(right,16px);
      display: flex;
      justify-content: space-between;
      .priceLenged{
        .rem(width,70px);
        display: flex;
        align-items: center;

        &>span{
          &:first-child{
            .rem(width,15px);
            .rem(height,1px);
            background:#FDE545;
            &::before{
              content:"";
              display: block;
              border-radius: 50%;
              position: relative;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              .rem(width,6px);
              .rem(height,6px);
              background: #FDE545;
            }
          }
          &:last-child{
            .rem(font-size,14px);
            .rem(margin-left,9px);
            font-weight: 400;
            color: #EFFFFB;
          }
        }

      }
    }
    .leftcontext{
      position: absolute;
      .rem(top,29px);
      .rem(width, 547px);
      .rem(height, 430px)
    }
  }
  .center{
    position: absolute;
    .rem(width,796px);
    .rem(height,462px);
    .rem(top,0rem);
    .rem(left,565px);
    background: #0b0f28;
    &>div{
      background: #101638;
    }
    .centerLeft{
      position: absolute;
      .rem(width,394px);
      .rem(height,462px);
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
      .centerLeftLenged{
        position: absolute;
        // .rem(width,280px);
        width:100%;
        .rem(padding-left,24px);
        .rem(padding-right,24px);
        .rem(top,86px);
        flex-wrap: wrap;
        // .rem(right,16px);
        display: flex;
        // justify-content: space-between;
        div{
          &:nth-child(n+2){
            .rem(margin-left,58px);
          }
          &:nth-child(n+4){
            .rem(margin-left,0);
            .rem(margin-top,23px);
          }
          &:nth-child(n+5){
            .rem(margin-left,58px);
          }
        }
      }

    .centerLeftContext{
      position: absolute;
      .rem(top,170px);
      .rem(width, 394px);
      .rem(height, 290px)
    }
    }
    .centerRight{
      position: absolute;
      .rem(width,394px);
      .rem(height,462px);
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
      .centerRightContext{
        position: absolute;
        overflow: hidden;
        .rem(top,112px);
        .rem(width, 394px);
        .rem(height, 344px);
      }
    }
  }
  .right{
    position: absolute;
    .rem(width,541px);
    .rem(height,462px);
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
    .rightContext{
      position: absolute;
      .rem(top,29px);
      .rem(width, 541px);
      .rem(height, 430px)
    }
  }

  // .right{
  //   position: absolute;
  //   .rem(width,1346px);
  //   .rem(height,462px);
  //   .rem(top,0rem);
  //   .rem(left,565px);
  //   .rem(padding-left,35px);
  //   .rem(padding-right,35px);
  //   .rem(padding-top,25px);
  //   .rem(padding-bottom,25px);
  //   display:flex;
  //    & > :not(:first-child){
  //     .rem( margin-left, 19px);
  //    }
  // }
}
</style>
