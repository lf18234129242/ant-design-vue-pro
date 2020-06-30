<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider 
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null" 
        v-model="collapsed" 
        collapsible
        width="256px"
      >
        <div class="logo">ant design pro</div>
        <SiderMenu :theme="navTheme"></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapsed=!collapsed"></a-icon>
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu'
import SettingDrawer from '../components/SettingDrawer'
export default {
  name: 'basic-layout',
  data() {
    return {
      collapsed: false
    }
  },
  components: {
    SettingDrawer,
    Header,
    Footer,
    SiderMenu
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || 'dark'
    },
    navLayout() {
      return this.$route.query.navLayout || 'left'
    },
  },
}
</script>

<style scoped>
.trigger{
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover{
  background: #f6f6f6;
}
.logo{
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo{
  color: #fff;
}
</style>