<template>
  <div class="App">
    lang: {{ lang }}
    {{ translations }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <IconBase>
      <IconTest/>
    </IconBase>
  </div>
</template>

<script>
import HelloWorld from './features/HelloWorld.vue';
import IconBase from './features/icons/IconBase.vue';
import IconTest from './features/icons/IconTest.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    IconBase,
    IconTest,
  },
  props: {
    lang: String,
    translations: Object,
  }
}
</script>

<style lang="scss" scoped>
.App * {
  box-sizing: border-box;
}
</style>
