import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'
import i18n from './i18n/i18n';

Vue.use(vueCustomElement);

Vue.config.productionTip = false

Vue.customElement('eideasy-widget', App, {
  beforeCreateVueInstance: rootElement => {
    rootElement.i18n = i18n;
    return rootElement;
  },
  attributeChangedCallback(name, oldValue, value) {
    console.info('attributeChangedCallback', name, oldValue, value);
  },
});
