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
          show: false
        },
        xAxis: {
          type: 'category',
          data: ['01/12', '01/11', '01/10', '01/09', '01/08']

        },
        yAxis: [
          {
            type: 'value',
            // name: '客流人数',
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
              formatter: '{value} '
            },
            splitLine: { show: false }

          },
          {
            type: 'value',
            // name: '销售额',
            min: 0,
            max: 1000,
            position: 'right',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#1189E2'
              }
            },
            axisLabel: {
              formatter: '{value} W'
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
            data: [490, 170, 390, 180, 160],
            type: 'bar',

            itemStyle: {

              // 圆角
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
          },
          {
            name: '客流人数',
            data: [360, 202, 340, 190, 170],
            type: 'bar',
            // showBackground: true,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#EF2B2D' },
                    { offset: 1, color: '#FE38A7' }
                  ]
                )
              }
            }
          },
          {
            name: '客单价',
            type: 'line',
            yAxisIndex: 2,
            data: [50, 60, 48, 24, 60],
            // backgroundStyle: {
            //   color: '#FDE545'
            // }
            lineStyle: {
              normal: {
                color: '#FDE545'
                // width: '1'
              }
            }
          }]
      }
    }
  },
  components: {
    BarChart
  }
}
</script>

<style lang="scss" scoped>

</style>
