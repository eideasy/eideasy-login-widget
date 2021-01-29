<template>
  <a
      href="#"
      class="MethodButton"
  >
    <Icon :iconName="iconName"/>
  </a>
</template>

<script>
import Icon from '../icons/Icon.vue';

export default {
  name: 'MethodButton',
  components: {
    Icon
  },
  props: {
    iconName: String,
  }
}
</script>

<style lang="scss" scoped>
.MethodButton {
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
  color: $theme-color-primary-400;
  width: 3.625em;
  height: 3.625em;
  border-radius: 3.625em;
  border: $border-default;
  padding: $spacer-2;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
