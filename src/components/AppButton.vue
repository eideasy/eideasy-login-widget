<script>
export default {
  name: 'AppButton',
  props: {
    type: String,
  }
}
</script>

<template>
  <button
      :type="type"
      :class="$style.button"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" module>
  .button {
    color: $brand-primary-50;
    background-color: $brand-primary-200;
    width: 100%;
    display: block;
    padding: $spacer-4 $spacer-4;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color $transition-duration;
    border-radius: $border-radius-form-element;
    border: 1px solid rgba(0, 49, 104, 0.3);
    outline: none;
    box-shadow: none;
    font-size: $font-size-md;
    letter-spacing: 0.01071em;
    line-height: 1.45;

    &:hover,
    &:focus {
      background-color: $brand-primary-300;
      outline: none;
    }

    &:active {
      transform: translateY(1px);
    }
  }
</style>
