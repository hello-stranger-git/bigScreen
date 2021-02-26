<template>
    <div style="width:100%;height:100%">
      <CircleChart id="featuresCircelCharts" width="100%" height="100%" :option="option" />
      <div class="message">
        <p>{{ totlePeople }}</p>
        <p>总人数</p>
      </div>
    </div>
</template>

<script>
import CircleChart from '@/components/charts'
export default {
  data () {
    return {
      option: {
        title: {
          text: '',
          subtext: '',
          left: 'center',
          show: false
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          show: false
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '80%'],
            data: [
              {
                value: 64,
                name: '64人 27.75%',
                itemStyle: {
                  color: '#0092FF'
                }
              },
              {
                value: 74,
                name: '74人 32.25%',
                itemStyle: {
                  color: '#CE5A60'
                }
              },
              {
                value: 47,
                name: '47人 18.25%',
                itemStyle: {
                  color: '#FDE545'
                }
              },
              {
                value: 54,
                name: '54人 22.75%',
                itemStyle: {
                  color: '#1BC85E'
                }
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            labelLine: {
              show: true,
              length: 15
            },
            label: {
              fontWeight: 400,
              color: '#EFFFFB',
              fontSize: 18
            },
            animation: false
          }
        ]
      },
      totlePeople: 0,
      featuresCircelChartsClear: null
    }
  },
  components: {
    CircleChart
  },
  watch: {
    totlePeople: {
      handler (newVal, oldVal) {
        this.totlePeople = newVal
      }
    }
  },
  beforeUpdate () {
    this.featuresCircelChartsClear = null
  },
  mounted () {
    this.featuresCircelChartsClear = setInterval(() => {
      // 随机生成1到100的整数
      const number1 = Math.floor(Math.random() * (100 - 1) + 1)
      const number2 = number1 + 32
      const number3 = number1 + 42
      const number4 = number1 + 22
      const totle = number1 + number2 + number3 + number4
      this.totlePeople = totle
      this.option.series[0].data[0].value = number1
      this.option.series[0].data[0].name = `${number1}人 ${((number1 / totle) * 100).toFixed(2)}%`
      this.option.series[0].data[1].value = number2
      this.option.series[0].data[1].name = `${number2}人 ${((number2 / totle) * 100).toFixed(2)}%`

      this.option.series[0].data[2].value = number3
      this.option.series[0].data[2].name = `${number3}人 ${((number3 / totle) * 100).toFixed(2)}%`

      this.option.series[0].data[3].value = number4
      this.option.series[0].data[3].name = `${number4}人 ${((number4 / totle) * 100).toFixed(2)}%`
    }, 1500)
  }
}
</script>
<style lang="less" scoped>
.message{
  position: absolute;
  .rem(top,141px);
  .rem(left,274px);
  transform: translate(-50%,-50%);
  p{
    margin: 0;
    text-align: center;
    &:last-child{
      .rem(font-size,16px);
      .rem(font-weight,400px);
      color: #EFFFFB;
    }
    &:first-child{
      .rem(font-size,44px);
      font-weight: bold;
      color: #259CFF;
    }
  }
}
</style>
