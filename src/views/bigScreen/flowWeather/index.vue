<!--客流天气占比图-->
<template>
  <div class="flowWeather">
      <WeatherCharts id="weatherCharts" width="100%" height="100%" :option="option" />
  </div>
</template>

<script>
import WeatherCharts from '@/components/charts'
export default {
  components: {
    WeatherCharts
  },
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
          trigger: 'item',
          formatter: '{b} \n  {c}人 {d}% '
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              {
                value: 24,
                name: '多云',
                itemStyle: {
                  color: '#1BC85E'
                }
              },
              {
                value: 21,
                name: '晴天',
                itemStyle: {
                  color: '#FDE545'
                }
              },
              {
                value: 20,
                name: '雾天',
                itemStyle: {
                  color: '#CE5A60'
                }
              },
              {
                value: 19,
                name: '有雨 ',
                itemStyle: {
                  color: '#0092FF'
                }
              },
              {
                value: 16,
                name: '下雪',
                itemStyle: {
                  color: '#FF9E2B'
                }
              }
            ].sort(function (a, b) { return a.value - b.value }),
            roseType: 'radius',
            label: {
              fontWeight: 400,
              color: '#EFFFFB',
              fontSize: 18,
              formatter: ' {per|{d}%}  \n  {people|{c}人} ',
              rich: {
                people: {
                  color: '#EFFFFB',
                  fontSize: '18px',
                  lineHeight: 24
                },
                per: {
                  color: '#EFFFFB',
                  fontSize: '18px',
                  lineHeight: 24
                }
              }
            },
            labelLine: {
              lineStyle: {
                color: '#EFFFFB'
              },
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animation: false,
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      },
      featuresCircelChartsClear: null
    }
  },
  beforeUpdate () {
    this.featuresCircelChartsClear = null
  },
  mounted () {
    this.featuresCircelChartsClear = setInterval(() => {
      const seriesData = this.option.series[0].data.concat()
      // 随机生成1到100的整数
      const number1 = Math.floor(Math.random() * (500 - 1) + 1)
      const number2 = Math.floor(Math.random() * (500 - 1) + 1)
      const number3 = Math.floor(Math.random() * (500 - 1) + 1)
      const number4 = Math.floor(Math.random() * (500 - 1) + 1)
      const number5 = Math.floor(Math.random() * (500 - 1) + 1)
      seriesData[0].value = number1
      seriesData[1].value = number2
      seriesData[2].value = number3
      seriesData[3].value = number4
      seriesData[4].value = number5
      this.option.series[0].data = seriesData.sort(function (a, b) { return a.value - b.value })
    }, 1500)
  }
}
</script>

<style lang="less" scoped>
.flowWeather{
  height: 100%;
}
</style>
