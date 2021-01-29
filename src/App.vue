<template>
  <div class="App">
    <Layout/>
  </div>
</template>

<script>
import Layout from "./features/common/Layout";
import {mutations} from './store';

export default {
  name: 'App',
  components: {
    Layout,
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
  created: function() {
    mutations.setLang(this.langCode);
    mutations.setCountryCode(this.countryCode);
    mutations.setLocalApiEndpoint(this.localApiEndpoint);
    mutations.setClientId(this.clientId);
    mutations.setSandbox(this.sandbox);
    mutations.setTranslations(this.translations);
    mutations.setSuccessCallback(this.onSuccess);
  }
}
</script>

<style lang="scss">
.App {
  font-family: $font-family;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
}

.App * {
  box-sizing: border-box;
}
</style>
