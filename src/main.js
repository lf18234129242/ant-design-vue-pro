import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from './components/Authorized'
import Auth from './directives/auth'
import { Button, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue";
import request from './../src/utils/request'

Vue.config.productionTip = false;

Vue.prototype.$request = request

Vue.component('Authorized', Authorized)

Vue.use(Button)
  .use(Layout)
  .use(Icon)
  .use(Drawer)
  .use(Radio)
  .use(Menu)
  .use(Auth)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
