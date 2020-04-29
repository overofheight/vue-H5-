import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App';
import Vant from 'vant'; // https://youzan.github.io/vant/#/zh-CN/intro
import EvenBus from './tools/eventBus';
import Modal from '@/pages/login/modal.js'
import 'vant/lib/index.css';
import { Icon } from 'vant';
import 'vant/lib/icon/local.css';
import { Lazyload } from 'vant';

import '@/assets/styles/normalize.min.css';
import VuePageStack from 'vue-page-stack';



Vue.config.productionTip = false;
Vue.use(VuePageStack, { router });
Vue.use(Vant);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(EvenBus);
Vue.use(Modal);
import {
  // 基础样式
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  Checker,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe
} from 'cube-ui'
// 全局注册
Vue.use(Button)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
