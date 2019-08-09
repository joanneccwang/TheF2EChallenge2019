import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import { state, mutations, actions } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
