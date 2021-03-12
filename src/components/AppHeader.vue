<script>
export default {
  name: 'AppHeader',
}
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.slot">
      <slot name="left" />
    </div>
    <div :class="[$style.slot, $style.slotRight]">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  border-bottom: $border-default;
  min-height: 71px;
  padding: $spacer-1 $spacer-4;
  background-color: $gray-400;
  display: flex;
  height: 100%;
  align-items: center;
}

.slotRight {
  margin-left: auto;
}

</style>
