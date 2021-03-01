<template>
  <div :class="$style.spinner"></div>
</template>

<style lang="scss" module>
.spinner {
  font-size: 16px;
  width: 4.375em;
  height: 4.375em;
  border: 0.3125em solid $theme-color-primary-400;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
