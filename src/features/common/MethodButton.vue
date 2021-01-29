<template>
  <a
      href="#"
      class="MethodButton"
  >
    <div class="Ring">
      <Icon :iconName="iconName"/>
    </div>

    <div class="Text">
      <slot></slot>
    </div>
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
  text-decoration: none;
  outline: none;
  text-align: center;

  &:hover,
  &:focus {
    text-decoration: none;
    outline: none;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.Ring {
  display: inline-block;
  vertical-align: top;
  width: 3.625em;
  height: 3.625em;
  border-radius: 3.625em;
  border: $border-default;
  padding: $spacer-2;
  transition: $transition-duration;
}

.MethodButton:hover .Ring,
.MethodButton:focus .Ring {
  border-color: currentColor;
}

.Text {
  font-size: $font-size-sm;
  line-height: 1.33333;
  margin-top: $spacer-2;
}

</style>
