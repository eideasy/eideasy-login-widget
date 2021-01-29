<template>
  <div class="Layout">
    <Header></Header>
    <div class="Main">
      <LoadingOverlay></LoadingOverlay>
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
import LoadingOverlay from '../common/LoadingOverlay';

export default {
  name: 'Layout',
  components: {
    MethodSelection,
    Footer,
    Header,
    LoadingOverlay,
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
    position: relative;
    padding: $spacer-6 $spacer-10;
  }
</style>
