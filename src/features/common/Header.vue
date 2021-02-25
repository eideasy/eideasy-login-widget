<template>
  <div class="Header">
    I am header {{$t("message")}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.Header {
  border-bottom: $border-default;
  min-height: 71px;
  padding: $spacer-1 $spacer-4;
  background-color: $gray-400;
}

</style>
