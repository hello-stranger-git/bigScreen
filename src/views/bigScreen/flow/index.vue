<template>
  <div style="width:100%;height:100%">
    <LineChart id="flowLineCharts" width="100%" height="100%" :option="option"/>
  </div>
</template>

<script>
import LineChart from '@/components/charts'
export default {
  data () {
    return {
      flowLineChartsClear: null,
      option: {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
          show: false
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          show: false
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
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
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#1184D9',
              fontWeight: 400,
              fontSize: 14,
              showMinLabel: false
            },
            splitLine: {
              lineStyle: {
                color: '#4080fe1f'
              }
            }
          }
        ],
        series: [
          {
            name: '老年',
            type: 'line',
            symbol: 'none', // 去掉线上的小圆点
            areaStyle: {
              // 设置填充渐变色
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#FEA8C5'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ])
              }
            },
            data: [320, 132, 201, 334, 190, 130, 220, 100],
            lineStyle: {
              width: 3
            },
            smooth: true, // 设置线的平滑度
            itemStyle: {
              normal: {
                color: '#FEA8C5', // 设置覆盖颜色
                label: {
                  show: false, // 显示值
                  // position: "top", //值在上方显示
                  textStyle: {
                    color: '#585859', // 值得颜色
                    fontWeight: 400
                  }
                }
              }
            }
          },

          {
            name: '中年',
            type: 'line',
            symbol: 'none', // 去掉线上的小圆点
            // stack: "总量",
            areaStyle: {
              // 设置渐变颜色
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#F1835B'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ])
              }
            },
            data: [220, 402, 231, 134, 190, 230, 120, 150],
            lineStyle: {
              width: 3
            },
            smooth: true,

            itemStyle: {
              normal: {
                color: '#F1835B', // 设置覆盖颜色
                label: {
                  show: false, // 显示值
                  // position: "top", //值在上方显示
                  textStyle: {
                    color: '#585859', // 值得颜色
                    fontWeight: 400
                  }
                }
              }
            }
          },
          {
            name: '青年',
            symbol: 'none', // 去掉线上的小圆点
            type: 'line',
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#15D9D2'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ])
              }
            },
            data: [220, 302, 181, 234, 210, 290, 150, 80],
            lineStyle: {
              width: 3
            },
            smooth: true,
            itemStyle: {
              normal: {
                color: '#56BE9B', // 设置覆盖颜色
                label: {
                  show: false, // 显示值
                  // position: "top", //值在上方显示
                  textStyle: {
                    color: '#585859', // 值得颜色
                    fontWeight: 400
                  }
                }
              }
            }
          }
        ]
      }
    }
  },
  components: {
    LineChart
  },
  beforeUpdate () {
    this.flowLineChartsClear = null
  },
  mounted () {
    this.flowLineChartsClear = setInterval(() => {
      this.option.series[0].data = []
      this.option.series[1].data = []
      this.option.series[2].data = []
      for (let i = 0; i < 8; i++) {
        this.option.series[0].data.push(Math.floor(Math.random() * 500 + 100))
        this.option.series[1].data.push(Math.floor(Math.random() * 500 + 100))
        this.option.series[2].data.push(Math.floor(Math.random() * 500 + 100))
      }
    }, 1500)
  }
}
</script>

<style lang="less" scoped>

</style>
