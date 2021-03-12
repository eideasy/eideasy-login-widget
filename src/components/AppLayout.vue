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
import BackButton from './BackButton';

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
    BackButton,
  },
  computed: {
    ...getters,
  },
  methods: {
    ...actions,
  },
}
</script>

<template>
  <div :class="$style.layout">
    <AppHeader v-if="currentView === 'MethodSelection'">
      <template v-slot:left>
        <div :class="$style.regionTitle">
          {{ $t('yourRegion') }}
        </div>
      </template>
      <template v-slot:right>
        Region picker
      </template>
    </AppHeader>
    <AppHeader v-else>
      <template v-slot:left>
        <BackButton :on-click="() => changeView('MethodSelection')" />
      </template>
      <template v-slot:right>
        <div :class="$style.viewTitle">
          {{ $t(currentViewTitleKey) }}
        </div>
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

  .viewTitle {
    @extend .uppercase-sm;
    text-align: right;
    letter-spacing: 0.03667em;
    color: $primary;
  }

  .regionTitle {
    color: $gray-700;
    @extend .uppercase-sm;
  }
</style>
