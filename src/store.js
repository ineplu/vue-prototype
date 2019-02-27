import Vue from "vue";
import Vuex from "vuex";
import * as getters from './getters'
import * as types from '@/actions/types'
import * as actions from '@/actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    htmlHeader: ''
  },
  getters,
  mutations: {
    [types.SET_HEADER] (state) {}
  },
  actions
});
