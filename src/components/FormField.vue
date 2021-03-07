<script>
import AppInput from './AppInput';
export default {
  name: 'FormField',
  components: {
    AppInput,
  },
  props: {
    type: String,
    name: String,
    placeholder: String,
    id: String,
    label: String,
    value: [Number, String, Array, Object],
    onInput: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<template>
  <div
    :class="$style.formField"
  >
    <label
      :for="id"
      :class="$style.label"
    >
      {{ label }}
    </label>
    <AppInput
      v-bind="{type, name, placeholder, id, value}"
      @input="handleInput"
    />
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
</style>
