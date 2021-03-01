<template>
  <div :class="$style.loadingOverlay">
    <div :class="$style.spinnerHolder">
      <AppSpinner/>
    </div>
  </div>
</template>

<script>
import AppSpinner from './AppSpinner.vue';

export default {
  name: 'LoadingOverlay',
  components: {
    AppSpinner
  },
}
</script>

<style lang="scss" module>
  .loadingOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: $white;
    opacity: 0.9;
  }

  .spinnerHolder {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    pointer-events: none;
    user-select: none;
  }
</style>
