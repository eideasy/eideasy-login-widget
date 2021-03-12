<script>
import {getters, actions} from '../store';
import MethodSelection from '../views/MethodSelection.vue';
import SmartIdAuth from '../views/SmartIdAuth';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import LoadingOverlay from './LoadingOverlay';
import AppAlert from './AppAlert';
import FlashMessages from './FlashMessages';
import MobileIdAuth from '../views/MobileIdAuth';

export default {
  name: 'AppLayout',
  components: {
    MethodSelection,
    AppFooter,
    AppHeader,
    LoadingOverlay,
    AppAlert,
    FlashMessages,
    SmartIdAuth,
    MobileIdAuth,
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
    <AppHeader v-if="currentView === 'MethodSelection'">
      <template v-slot:left>
        {{ $t('yourRegion') }}
      </template>
      <template v-slot:right>
        Region picker
      </template>
    </AppHeader>
    <AppHeader v-else>
      <template v-slot:left>
        Back button
      </template>
      <template v-slot:right>
        {{ $t(currentViewTitleKey) }}
      </template>
    </AppHeader>
    <div :class="$style.main">
      <FlashMessages />
      <transition
        :name="$style.fade"
      >
        <LoadingOverlay v-show="isLoading" />
      </transition>
      <component :is="currentView" />
    </div>
    <AppFooter>
      <a
        href="https://eideasy.com"
        :class="$style.eidEasyLink"
        target="_blank"
      >
        {{ $t("poweredByEidEasy") }}
      </a>
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

  .eidEasyLink {
    text-decoration: none;
    color: currentColor;
    transition: $transition-duration;

    &:hover,
    &:focus {
      text-decoration: none;
      color: $primary;
    }
  }
</style>
