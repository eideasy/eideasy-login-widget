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
      :src="`//purecatamphetamine.github.io/country-flag-icons/3x2/${option.countryCode}.svg`"
      :alt="option.label"
      :class="$style.flag"
    >
    <div :class="$style.optionText">
      {{ option.label }}
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
