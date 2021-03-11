<template>
  <div style="width:100%;height:100%">
    <BarChart id="outFlowBarCharts" width="100%" height="100%" :option="option"/>
  </div>
</template>

<script>
import BarChart from '@/components/charts'
export default {
  data () {
    return {
      option: {

        grid: {
          left: '4%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['01/14', '01/13', '01/12', '01/11', '01/10', '01/09', '01/08'],
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
            max: 5000,
            position: 'left',
            axisLine: {
              show: false,
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
              show: true,
              lineStyle: {
                color: '#4080fe1f'
              }
            }

          }
        ],
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

            animation: true,
            name: '客流人数',
            data: [3600, 2020, 3400, 1900, 1700, 3000, 4000],
            type: 'bar',
            barWidth: '20%',
            barGap: '50%',
            itemStyle: {
              normal: {
                // barBorderRadius: [10, 10, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#57E6B1' },
                    { offset: 1, color: '#4080FE' }
                  ]
                )
              }
            }
          }
        ]
      },
      outFlowBarChartsClear: null
    }
  },
  components: {
    BarChart
  },
  beforeUpdate () {
    this.outFlowBarChartsClear = null
  },
  mounted () {
    this.outFlowBarChartsClear = setInterval(() => {
      this.option.series[0].data = []
      this.option.series[0].data[0] = Math.floor(Math.random() * 5000 + 0)
      this.option.series[0].data[1] = 2020
      this.option.series[0].data[2] = 3400
      this.option.series[0].data[3] = 1900
      this.option.series[0].data[4] = 1700
      this.option.series[0].data[5] = 3000
      this.option.series[0].data[6] = 4000
    }, 1500)
  }
}
</script>

<style lang="scss" scoped>

</style>
