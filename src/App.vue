<script>
import AppLayout from "./components/AppLayout";
import {mutations} from './store';

export default {
  name: 'App',
  components: {
    AppLayout,
  },
  props: {
    langCode: String,
    countryCode: String,
    localApiEndpoint: String,
    clientId: String,
    sandbox: Boolean,
    translations: Object,
    onSuccess: Function,
  },
  created: function () {
    const {translations, $i18n} = this;
    mutations.setCountryCode(this.countryCode);
    mutations.setLocalApiEndpoint(this.localApiEndpoint);
    mutations.setClientId(this.clientId);
    mutations.setSandbox(this.sandbox);
    mutations.setSuccessCallback(this.onSuccess);

    if (translations) {
      Object.keys(translations)
          .forEach((locale) => {
            const currentMessages = $i18n.messages[locale] || {};
            $i18n.setLocaleMessage(locale, {...currentMessages, ...translations[locale]});
          });
    }
  },

  watch: {
    langCode: {
      handler(newVal) {
        this.$i18n.locale = newVal;
      },
      immediate: true,
    },
  },
}
</script>

<template>
  <div :class="$style.app">
    <AppLayout/>
  </div>
</template>

<style lang="scss" module>
.app {
  font-family: $font-family;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
}

.app * {
  box-sizing: border-box;
}
</style>
