<template>
  <div class="MethodSelection">
    <LoadingOverlay></LoadingOverlay>
    <div class="Row">
      <div class="Unit">
        <MethodButton iconName="IconMobileId">MOBILE-ID</MethodButton>
      </div>
      <div class="Unit">
        <MethodButton
            iconName="IconSmartId"
            @click="clickHandler"
        >
          SMART-ID
        </MethodButton>
      </div>
      <div class="Unit">
        <MethodButton iconName="IconIdCard">ID-CARD</MethodButton>
      </div>
    </div>
  </div>
</template>

<script>
import MethodButton from '../common/MethodButton.vue';
import LoadingOverlay from '../common/LoadingOverlay';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
    LoadingOverlay,
  },
  methods: {
    clickHandler() {
      console.log('test');
    }
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
