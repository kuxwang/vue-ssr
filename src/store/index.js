import { createStore as createVueStore } from "vuex";
import { moduleA } from "./moduleA";

export const createStore = () =>
  createVueStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      moduleA
    },
  });
