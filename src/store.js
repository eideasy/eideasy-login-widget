import Vue from "vue";

export const store = Vue.observable({
  currentView: 'MethodSelection',
});

export const mutations = {
  setCurrentView(viewName) {
    store.currentView = viewName;
  }
};
