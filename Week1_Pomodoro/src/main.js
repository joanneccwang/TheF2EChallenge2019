// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Custom General Components
import Icon from '@/components/basic/Icon';
import TextButton from '@/components/basic/TextButton';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('icon', Icon);
Vue.component('text-button', TextButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
