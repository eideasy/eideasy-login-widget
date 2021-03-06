<script>
export default {
  name: 'AppInput',
  props: {
    type: String,
    name: String,
    placeholder: String,
    id: String,
  }
}
</script>

<template>
  <div>
    <label
        :for="id"
        :class="$style.label"
    >
      <slot name="label"></slot>
    </label>
    <input
        :class="$style.input"
        v-bind="{type, name, placeholder, id}"
    >
  </div>
</template>

<style lang="scss" module>
  .label {
    display: block;
    font-size: $font-size-md;
    color: $input-label-color;
    line-height: 1.1429;
    margin-bottom: $spacer-2;
    padding-left: $spacer-4;
    letter-spacing: 0.028571em;
  }

  .input {
    color: $input-color;
    font-size: $input-font-size;
    width: 100%;
    display: block;
    border-radius: $input-border-radius;
    -webkit-appearance: none;
    outline: none;
    border: $input-border;
    line-height: 1.2;
    padding: $spacer-4 $spacer-4;
    letter-spacing: 0.0275em;

    &:focus {
      border-color: $primary;
    }
  }
</style>
