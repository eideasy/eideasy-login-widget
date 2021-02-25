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
  loadingStart() {
    store.isLoading = true;
  },
  loadingEnd() {
    store.isLoading = false;
  }
};
