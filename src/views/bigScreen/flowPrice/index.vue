<template>
  <div style="width:100%;height:100%">
    <BarChart id="flowPriceBarCharts" width="100%" height="100%" :option="option"/>
  </div>
</template>

<script>
import BarChart from '@/components/charts'
export default {
  data () {
    return {
      option: {

        grid: {
          left: '0%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['01/12', '01/11', '01/10', '01/09', '01/08'],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff6',
            fontWeight: 400,
            fontSize: 14,
            margin: 14,
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#4080fe1f'
            }
          }

        },
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 500,
            position: 'left',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#1189E2'
              }
            },
            axisLabel: {
              color: '#1184D9',
              fontWeight: 400,
              fontSize: 14,
              showMinLabel: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#4080fe1f'
              }
            }

          },
          {
            type: 'value',
            min: 0,
            max: 1000000,
            position: 'right',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#1189E2'
              }
            },
            axisLabel: {
              color: '#1184D9',
              fontWeight: 400,
              fontSize: 14,
              showMinLabel: false,
              formatter: (value) => {
                if (value > 10000) {
                  return parseInt(value / 10000) + 'w'
                }
                return value
              }
            },
            splitLine: { show: false }
          },
          {
            type: 'value',
            name: '客单价',
            min: 0,
            max: 500,
            position: 'left',
            splitLine: { show: false },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(0,0,0,0)'
              }
            }

          }],
        // 提示框
        tooltip: {
          trigger: 'axis', // 多显
          axisPointer: {
            type: 'line', // line竖线，cross围殴十字准星
            label: {
              backgroundColor: '' // 对应x轴和y轴选中值的背景
            },
            crossStyle: {
              color: '#fff' // 十字准星的横线颜色
            }
          }
        },
        series: [
          {
            name: '销售额',
            data: [490000, 170000, 390000, 180000, 160000],
            lineStyle: {
              normal: {
                color: '#FDE545'
              }
            },
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            barGap: '50%',
            itemStyle: {
              // 圆角
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#57E6B1' },
                    { offset: 1, color: '#4080FE' }
                  ]
                )
              }
            }
          },
          {
            name: '客流人数',
            data: [360, 202, 340, 190, 170],
            type: 'bar',
            // showBackground: true,
            barWidth: '15%',
            barGap: '50%',
            itemStyle: {
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#EF2B2D' },
                    { offset: 1, color: '#FE38A7' }
                  ]
                )
              }
            }
          }
          // {
          //   name: '客单价',
          //   type: 'line',
          //   yAxisIndex: 2,
          //   data: [50, 60, 48, 24, 60],
          //   lineStyle: {
          //     normal: {
          //       color: '#FDE545'
          //     }
          //   }
          // }
        ]
      },
      flowPriceBarChartsClear: null
    }
  },
  components: {
    BarChart
  },
  beforeUpdate () {
    this.flowLineChartsClear = null
  },
  mounted () {
    // 客流人数
    // const flowPeople = this.option.series[0].data
    // //销售额
    // const sale = this.option.series[1].data
    // //客单价
    // const price = this.option.series[1].data
    this.flowPriceBarChartsClear = setInterval(() => {
      this.option.series[0].data = []
      this.option.series[1].data = []
      // this.option.series[2].data = []
      for (let i = 0; i < 5; i++) {
        this.option.series[0].data.push(Math.floor(Math.random() * 1000000 + 0))
        this.option.series[1].data.push(Math.floor(Math.random() * 500 + 0))
        // this.option.series[2].data.push(Math.floor(Math.random() * 500 + 0))
      }
    }, 1500)
  }
}
</script>

<style lang="scss" scoped>

</style>
