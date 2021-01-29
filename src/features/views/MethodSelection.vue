<template>
  <div class="MethodSelection">
    <div class="Row">
      <div class="Unit">
        <MethodButton iconName="IconIdCard">ID-CARD</MethodButton>
      </div>
      <div class="Unit">
        <MethodButton iconName="IconIdCard">ID-CARD</MethodButton>
      </div>
      <div class="Unit">
        <MethodButton iconName="IconIdCard">ID-CARD</MethodButton>
      </div>
    </div>
  </div>
</template>

<script>
import MethodButton from '../common/MethodButton.vue';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  }
}
</script>

<style lang="scss" scoped>
.Row {
  display: flex;
  justify-content: center;
  margin-left: -$spacer-2;
  margin-right: -$spacer-2;
}

.Unit {
  padding: 0 $spacer-2;
}
</style>
