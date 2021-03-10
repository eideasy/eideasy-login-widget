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

.ring {
  display: inline-block;
  vertical-align: top;
  width: 3.625em;
  height: 3.625em;
  border-radius: 3.625em;
  border: $border-default;
  padding: $spacer-2;
  transition: $transition-duration;
}

.methodButton:hover .ring,
.methodButton:focus .ring {
  border-color: currentColor;
}

.text {
  font-size: $font-size-sm;
  line-height: 1.33333;
  margin-top: $spacer-2;
  text-transform: uppercase;
  user-select: none;
}
</style>
