import Vue from "vue";
import views from './views/views';

export const store = Vue.observable({
  countryCode: 'EE',
  currentView: 'MethodSelection',
  currentViewTitleTranslationKey: '',
  isLoading: false,
  flashMessages: [],
});

export const getters = {
  countryCode: () => store.countryCode,
  currentView: () => store.currentView,
  currentViewTitleKey: () => store.currentViewTitleKey,
  isLoading: () => store.isLoading,
  flashMessages: () => store.flashMessages,
}

export const mutations = {
  setCountryCode(countryCode) {
    store.countryCodeng = countryCode;
  },
  setCurrentView(template) {
    store.currentView = template;
  },
  setCurrentViewTitleKey(viewTitleKey) {
    store.currentViewTitleKey = viewTitleKey;
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
    mutations.setCurrentView(views[viewName].template);
    mutations.setCurrentViewTitleKey(views[viewName].titleTranslationKey);
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
    } else {
      message.scheme = 'danger';
      message.translationKey = 'noResponseError';
    }

    if (data.message) {
      message.scheme = 'danger';
      message.text = data.message;
    }
    mutations.addFlashMessage(message);
  },
  clearFlashMessages() {
    mutations.clearFlashMessages();
  }
}
