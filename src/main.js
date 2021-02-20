// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './stores'
import permit from './directive'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'xe-utils'
import VueCropper from 'vue-cropper'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import moment from 'moment'
import 'moment/locale/zh-cn'

import './assets/icons' // icon
import './comm/authority' // permission access control
import Print from './comm/vueprint'
import { parseTime, currentDate } from './myutil/public'
import { download } from './myutil/zipload'

moment.locale('zh-cn')
Vue.prototype.$moment = moment // 赋值使用
Vue.prototype.$axios = axios
Vue.prototype.parseTime = parseTime
Vue.prototype.currentDate = currentDate
Vue.prototype.download = download
Vue.config.productionTip = false
Vue.use(permit)
Vue.use(Print) // 注册
Vue.use(Antd)
Vue.use(VXETable)
Vue.use(VueCropper)
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3 // 目前只有一项，即msg方法的默认消失时间，单位：秒
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
  }
})
