<template>
  <div>
    <Chart :options="chartOption" style="height:400px"></Chart>
  </div>
</template>

<script>
import Chart from '@/components/Chart'
// import random from 'lodash/random'
// import axios from 'axios'
export default {
  name: 'analysis',
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {}
    }
  },
  mounted () {
    this.getChartData()
    // this.interval = setInterval(() => {
    //   this.getChartData()
    // }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    getChartData() {
      this.$request({
        method: 'get',
        url: '/api/dashboard/chart1',
        params: {
          ID: 12345
        }
      }).then(res => {
        this.chartOption = {
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
            data: res.data
          }]
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>