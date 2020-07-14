<template>
  <div>
    <Chart :options="chartOption" style="height:400px"></Chart>
  </div>
</template>

<script>
import Chart from '@/components/Chart'
import random from 'lodash/random'
export default {
  name: 'analysis',
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {
        title: {
          text: '入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '鞋子', '褥子', '袜子', '高跟鞋']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5,10,20,40,30,60]
        }]
      }
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(
        () => random(100)
      )
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="less" scoped>

</style>