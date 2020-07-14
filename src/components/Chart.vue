<template>
  <div ref="chartDom">

  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import echarts from 'echarts'
import { addListener, removeListener } from 'resize-detector';
export default {
  data() {
    return {
      chart: null
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    },
  },
  watch: {
    options: {
      deep: true,
      handler(n) {
        this.chart.setOption(n)
      }
    }
  },
  created() {
    this.resize = debounce(this.resize, 300)
  },
  mounted () {
    this.renderChart()
    addListener(this.$refs.chartDom, this.resize)
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    resize() {
      this.chart.resize()
    },
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom)
      this.chart.setOption(this.options)
    }
  }
}
</script>

<style lang="less" scoped>

</style>