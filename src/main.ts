/*
 * @Description: 
 * @Author: sueRimn
 * @Date: 2021-06-18 17:07:06
 * @LastEditor: sueRimn
 * @LastEditTime: 2021-06-21 15:32:39
 * @FilePath: \vue-picture-cut\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import EventBus from 'vue-bus-ts';
import VuePictureCut from './lib';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(VuePictureCut);
Vue.use(ElementUI, { size: 'mini'});
Vue.use(EventBus);
const bus = new EventBus.Bus();
const vue = new Vue({
  el: '#app',
  bus,
  render: h => h(App),
}).$mount('#app')

export default vue
