import Vue from "vue";

export const store = Vue.observable({
  currentView: 'MethodSelection',
  isLoading: false,
});

export const mutations = {
  setCurrentView(viewName) {
    store.currentView = viewName;
  },
  loadingStart() {
    store.isLoading = true;
  },
  loadingEnd() {
    store.isLoading = false;
  }

};
