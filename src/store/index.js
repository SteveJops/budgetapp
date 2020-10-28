import Vue from "vue";
import Vuex from "vuex";
import budgetList from "./modules/objectsList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { budgetList },
});
