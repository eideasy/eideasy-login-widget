<script>
import {store, mutations} from '../../store';
import MethodSelection from '../views/MethodSelection.vue';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import LoadingOverlay from '../common/LoadingOverlay';

export default {
  name: 'AppLayout',
  components: {
    MethodSelection,
    AppFooter,
    AppHeader,
    LoadingOverlay,
  },
  data: () => ({
    currentView: store.currentView,
  }),
  computed: {
    isLoading: () => store.isLoading,
  },
  methods: {
    setCurrentView: mutations.setCurrentView
  }
}
</script>

<template>
  <div :class="$style.layout">
    <AppHeader></AppHeader>
    <div :class="$style.main">
      <LoadingOverlay v-if="isLoading"></LoadingOverlay>
      <component :is="currentView"></component>
    </div>
    <AppFooter>
      Powered by eIDEasy
    </AppFooter>
  </div>
</template>

<style lang="scss" module>
  .layout {
    background-color: $gray-100;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    overflow: hidden;
  }

  .main {
    position: relative;
    padding: $spacer-6 $spacer-10;
  }
</style>
