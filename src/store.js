import Vue from "vue";

export const store = Vue.observable({
  countryCode: 'EE',
  localApiEndpoint: null,
  clientId: null,
  sandbox: false,
  currentView: 'MethodSelection',
  isLoading: false,
  successCallback: null,
});

export const getters = {
  countryCode: () => store.countryCode,
  localApiEndpoint: () => store.localApiEndpoint,
  clientId: () => store.clientId,
  sandbox: () => store.sandbox,
  currentView: () => store.currentView,
  isLoading: () => store.isLoading,
  successCallback: () => store.successCallback,
}

export const mutations = {
  setCountryCode(countryCode) {
    store.countryCodeng = countryCode;
  },
  setLocalApiEndpoint(endpoint) {
    store.localApiEndpoint = endpoint;
  },
  setClientId(id) {
    store.clientId = id;
  },
  setSandbox(isEnabled) {
    store.sandbox = isEnabled;
  },
  setCurrentView(viewName) {
    store.currentView = viewName;
  },
  setSuccessCallback(callback) {
    store.successCallback = callback;
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
  }
}
