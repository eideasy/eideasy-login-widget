import Vue from "vue";

export const store = Vue.observable({
  countryCode: 'EE',
  currentView: 'MobileIdAuth',
  isLoading: false,
  flashMessages: [],
});

export const getters = {
  countryCode: () => store.countryCode,
  currentView: () => store.currentView,
  isLoading: () => store.isLoading,
  flashMessages: () => store.flashMessages,
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
  addFlashMessage(message) {
    store.flashMessages.push(message);
  },
  clearFlashMessages() {
    store.flashMessages = [];
  }
};

export const actions = {
  loadingStart() {
    mutations.setIsLoading(true);
  },
  loadingEnd() {
    mutations.setIsLoading(false);
  },
  changeCountry(countryCode) {
    mutations.setCountryCode(countryCode);
  },
  changeView(viewName) {
    mutations.clearFlashMessages();
    mutations.setCurrentView(viewName);
  },
  addFlashMessage(data) {
    const message = {
      text: '',
      scheme: 'info',
    }

    if (data.error &&
      data.error.response &&
      data.error.response.data &&
      data.error.response.data.message
    ) {
      message.scheme = 'danger';
      message.text = data.error.response.data.message;
    }
    mutations.addFlashMessage(message);
  },
  clearFlashMessages() {
    mutations.clearFlashMessages();
  }
}
