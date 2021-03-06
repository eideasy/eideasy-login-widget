<script>
import {getters, actions} from '../store';
import MethodSelection from '../views/MethodSelection.vue';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import LoadingOverlay from './LoadingOverlay';

export default {
  name: 'AppLayout',
  components: {
    MethodSelection,
    AppFooter,
    AppHeader,
    LoadingOverlay,
  },
  computed: {
    ...getters,
  },
  methods: {
    ...actions,
  }
}
</script>

<template>
  <div :class="$style.layout">
    <AppHeader></AppHeader>
    <div :class="$style.main">
      <transition
          :name="$style.fade"
      >
        <LoadingOverlay v-show="isLoading" />
      </transition>
      <component :is="currentView"></component>
    </div>
    <AppFooter>
      {{$t("poweredByEidEasy")}}
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

  .fade {
    &:global(-enter-active),
    &:global(-leave-active) {
      transition: opacity .2s;
    }
    &:global(-enter),
    &:global(-leave-to) {
      opacity: 0;
    }
  }
</style>
