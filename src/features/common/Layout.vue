<template>
  <div class="Layout">
    <Header></Header>
    <div class="Main">
      <component :is="currentView"></component>
    </div>
    <Footer>
      Powered by eIDEasy
    </Footer>
  </div>
</template>

<script>
import {store, mutations} from '../../store';
import MethodSelection from '../views/MethodSelection.vue';
import Footer from './Footer';
import Header from './Header';

export default {
  name: 'Layout',
  components: {
    MethodSelection,
    Footer,
    Header,
  },
  data: () => ({
    currentView: store.currentView,
  }),
  methods: {
    setCurrentView: mutations.setCurrentView
  }
}
</script>

<style lang="scss" scoped>
  .Layout {
    background-color: $gray-100;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    overflow: hidden;
  }

  .Main {
    padding: $spacer-6 $spacer-10;
  }
</style>
