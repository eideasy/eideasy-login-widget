<template>
  <div class="Layout">
    <div class="Main">
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import {store, mutations} from '../../store';
import MethodSelection from '../views/MethodSelection.vue';

export default {
  name: 'Layout',
  components: {
    MethodSelection,
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
  }
</style>
