import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// px2rem 自适应
// import '@/utils/lib-flexible/flexible.js'
// 引入echarts挂载全局
import * as echarts from 'echarts'
import '@/assets/reset.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
