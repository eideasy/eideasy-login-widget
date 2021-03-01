<template>
  <div :class="$style.header">
    I am header {{$t("message")}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" module>
.header {
  border-bottom: $border-default;
  min-height: 71px;
  padding: $spacer-1 $spacer-4;
  background-color: $gray-400;
}

</style>
