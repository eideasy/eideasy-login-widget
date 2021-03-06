import Vue from "vue";

export const store = Vue.observable({
  countryCode: 'EE',
  currentView: 'MethodSelection',
  isLoading: false,
});

export const getters = {
  countryCode: () => store.countryCode,
  currentView: () => store.currentView,
  isLoading: () => store.isLoading,
}

export const mutations = {
  setCountryCode(countryCode) {
    store.countryCodeng = countryCode;
  },
  setCurrentView(viewName) {
    store.currentView = viewName;
  },
  setIsLoading(value) {
    store.isLoading = value;
  },
};

export const actions = {
  loadingStart() {
    mutations.setIsLoading(true);
  },
  loadingEnd() {
    mutations.setIsLoading(false);
  },
  changeCountry(countryCode) {
    mutations.countryCode(countryCode);
  },
  changeView(viewName) {
    mutations.setCurrentView(viewName);
  }
}
