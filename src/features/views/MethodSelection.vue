<template>
  <div class="MethodSelection">
    <div class="Row">
      <div class="Unit">
        <MethodButton iconName="IconMobileId">MOBILE-ID</MethodButton>
      </div>
      <div class="Unit">
        <MethodButton
            iconName="IconSmartId"
        >
          SMART-ID
        </MethodButton>
      </div>
      <div class="Unit">
        <MethodButton
            iconName="IconIdCard"
            @click="clickHandler"
        >
          ID-CARD
        </MethodButton>
      </div>
    </div>
  </div>
</template>

<script>
import MethodButton from '../common/MethodButton.vue';
import {mutations} from '../../store';
import IDCardAuth from '@eid-easy/eideasy-js-sdk';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  },
  methods: {
    async clickHandler() {
      mutations.loadingStart();

      const IDCardAuthInstance = new IDCardAuth({
        sandbox: true,
        cardCountryCode: 'EE',
        clientId: '2IaeiZXbcKzlP1KvjZH9ghty2IJKM8Lg',
        onAuthorize: async (data) => {
          console.log(data);
        },
      });

      let authResult;
      try {
        authResult = await IDCardAuthInstance.start();
      } catch (error) {
       console.error(error);
      }
      mutations.loadingEnd();
      console.log(authResult);
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
