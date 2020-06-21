<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <template #handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <div>
          <h2>整体风格定制</h2>
          <a-radio-group 
            :value="$route.query.navTheme || 'dark'"
            @change="e => handleSettingTheme('navTheme', e.target.value)"
          >
            <a-radio value="dark">黑色</a-radio>
            <a-radio value="light">白色</a-radio>
          </a-radio-group>
          <h2>导航模式</h2>
          <a-radio-group 
            :value="$route.query.navLayout || 'left'"
            @change="e => handleSettingTheme('navLayout', e.target.value)"
          >
            <a-radio value="left">左侧</a-radio>
            <a-radio value="top">顶部</a-radio>
          </a-radio-group>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleSettingTheme(type, value) {
      this.$router.push({ query: {...this.$route.query, [type]: value} })
    },
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.handle{
  position: absolute;
  right: 256px;
  top: 200px;
  width: 48px;
  height: 48px;
  border-radius: 5px 0 0 5px;
  background: rgb(96, 166, 231);
  line-height: 48px;
  text-align: center;
  color: #fff;
}
</style>
