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
  display: inline-block;
  vertical-align: top;
  color: $theme-color-primary-400;

  svg {
    display: block;
  }
}
</style>
