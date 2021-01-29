import Vue from "vue";

export const store = Vue.observable({
  lang: 'ee',
  countryCode: 'EE',
  localApiEndpoint: null,
  clientId: null,
  sandbox: false,
  translations: {},
  currentView: 'MethodSelection',
  isLoading: false,
  successCallback: null,
});

export const mutations = {
  setLang(langCode) {
    store.lang = langCode;
  },
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
  setTranslations(translations) {
    store.translations = translations;
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
