// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'vue-material/dist/vue-material.min.css';

import Vue from 'vue';

import { MdButton, MdCard, MdField, MdLayout, MdToolbar } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import App from './App';
import router from './router';

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdLayout);
Vue.use(MdToolbar);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
