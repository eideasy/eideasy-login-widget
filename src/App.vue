<template>
  <div class="App">
    <Layout/>

    lang: {{ lang }}
    {{ translations }}
  </div>
</template>

<script>
import Layout from "./features/common/Layout";

export default {
  name: 'App',
  components: {
    Layout,
  },
  props: {
    lang: String,
    translations: Object,
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
