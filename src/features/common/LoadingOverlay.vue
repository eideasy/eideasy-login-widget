<template>
  <div class="LoadingOverlay">
    <div class="SpinnerHolder">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  name: 'LoadingOverlay',
  components: {
    Spinner
  },
}
</script>

<style lang="scss" scoped>
  .LoadingOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: $white;
    opacity: 0.9;
  }

  .SpinnerHolder {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    pointer-events: none;
    user-select: none;
  }
</style>
