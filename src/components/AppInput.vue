<script>
export default {
  name: 'AppInput',
  props: {
    type: String,
    name: String,
    placeholder: String,
    id: String,
    value: [Number, String, Array, Object],
    onInput: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<template>
  <input
    :class="$style.input"
    v-bind="{type, name, placeholder, id}"
    :value="value"
    @input="handleInput"
  >
</template>

<style lang="scss" module>
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
