import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';

import ModalRemove from './pages/ModalRemove.vue';

Vue.config.productionTip = false


// 전역 컴포넌트
Vue.component('ModalRemvoe', ModalRemove);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
