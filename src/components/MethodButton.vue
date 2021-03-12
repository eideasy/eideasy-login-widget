<script>
import AppIcon from '../icons/AppIcon.vue';

export default {
  name: 'MethodButton',
  components: {
    AppIcon
  },
  props: {
    iconName: String,
    onClick: Function,
    disabled: Boolean,
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.onClick(e);
      }
    }
  }
}
</script>

<template>
  <a
    href="#"
    role="button"
    :class="$style.methodButton"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    <div :class="$style.ring">
      <AppIcon :icon-name="iconName" />
    </div>

    <div :class="$style.text">
      <slot />
    </div>
  </a>
</template>

<style lang="scss" module>
.methodButton {
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
  color: $theme-color-primary-400;
  text-decoration: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transform: translateY(0);
  transition: .1s;

  &:hover,
  &:focus {
    text-decoration: none;
    outline: none;
    transform: translateY(-2px);
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.ring {
  display: inline-block;
  vertical-align: top;
  width: 3.625em;
  height: 3.625em;
  border-radius: 3.625em;
  border: $border-default;
  padding: $spacer-2;
  transition: $transition-duration;
  transform: scale3d(1, 1, 1);
}

.methodButton:hover,
.methodButton:focus {
  .ring {
    border-color: currentColor;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.1);
    transform: scale3d(1.05, 1.05, 1);
  }
}

.text {
  @extend .uppercase-sm;
  line-height: 1.33333;
  margin-top: $spacer-2;
  user-select: none;
}
</style>
