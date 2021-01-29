<template>
  <div class="MethodSelection">
    <Spinner></Spinner>
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
import Spinner from '../common/Spinner';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
    Spinner,
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
