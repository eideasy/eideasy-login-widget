<template>
  <div class="App">
    <Layout/>

    lang: {{ lang }}
    {{ translations }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <IconBase>
      <IconTest/>
    </IconBase>
  </div>
</template>

<script>
import Layout from "./features/common/Layout";
import HelloWorld from './features/HelloWorld.vue';
import IconBase from './features/icons/IconBase.vue';
import IconTest from './features/icons/IconTest.vue';

/*import IDCardAuth from '@eid-easy/eideasy-js-sdk';

const IDCardAuthInstance = new IDCardAuth({
  sandbox: true,
  cardCountryCode: 'EE',
  clientId: '2IaeiZXbcKzlP1KvjZH9ghty2IJKM8Lg',
  onAuthorize: async (data) => {
    console.log(data);
  },
});

IDCardAuthInstance.start();*/

export default {
  name: 'App',
  components: {
    HelloWorld,
    IconBase,
    IconTest,
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
}

.App * {
  box-sizing: border-box;
}
</style>
