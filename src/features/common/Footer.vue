<template>
  <div class="Footer">
    <div class="Text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.Footer {
  border-top: $border-default;
  padding: $spacer-3 0;
  margin: 0 $widget-spacing-x;
  font-size: $font-size-xs;
}
.Text {
  color: $gray-600;
  text-align: center;
  line-height: 1.4;
}
</style>
