<script>
import AppLayout from "./components/AppLayout";
import {actions} from './store';

export default {
  name: 'App',
  components: {
    AppLayout,
  },
  props: {
    language: String,
    countryCode: String,
    clientId: {
      type: String,
      required: true,
    },
    sandbox: Boolean,
    translations: Object,
    onSuccess: Function,
    localApiEndpoints: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...actions,
  },
  created: function () {
    const {translations, $i18n} = this;
    this.changeCountry(this.countryCode);

    if (translations) {
      Object.keys(translations)
          .forEach((locale) => {
            const currentMessages = $i18n.messages[locale] || {};
            $i18n.setLocaleMessage(locale, {...currentMessages, ...translations[locale]});
          });
    }
    
  },

  watch: {
    language: {
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
  line-height: $line-height;
}

.app * {
  box-sizing: border-box;
}
</style>
