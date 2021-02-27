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
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
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
