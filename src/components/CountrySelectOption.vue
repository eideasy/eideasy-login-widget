<script>
export default {
  name: 'CountrySelectOption',
  props: {
    option: {
      type: Object,
      required: true,
    },
  }
}
</script>

<template>
  <div :class="$style.option">
    <img
      :src="`//matsjoonas.github.io/country-flag-icons/3x2/${option.label}.svg`"
      :alt="$t(`countries.${option.label}.name`)"
      :class="$style.flag"
    >
    <div :class="$style.optionText">
      {{ $t(`countries.${option.label}.name`) }}
    </div>
  </div>
</template>

<style lang="scss" module>
.option {
  display: flex;
  width: 100%;
}

.optionText {
  font-size: $font-size-base;
  color: $select-text;
  letter-spacing: 0.009375em;
  margin-left: $spacer-4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.flag {
  display: block;
  width: 26px;
  height: auto;
}
</style>
