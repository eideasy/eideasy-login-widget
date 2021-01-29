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
            @click="clickHandler()"
        >
          ID-CARD
        </MethodButton>
      </div>
    </div>
  </div>
</template>

<script>
import MethodButton from '../common/MethodButton.vue';
import {store, mutations} from '../../store';
import IDCardAuth from '@eid-easy/eideasy-js-sdk';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  },
  computed: {
    sandbox: () => store.sandbox,
    countryCode: () => store.countryCode,
    clientId: () => store.clientId,
    localApiEndpoint: () => store.localApiEndpoint,
    successCallback: () => store.successCallback,
  },
  methods: {
    async clickHandler() {
      const _self = this;
      mutations.loadingStart();

      const IDCardAuthInstance = new IDCardAuth({
        sandbox: _self.sandbox,
        cardCountryCode: _self.countryCode,
        clientId: _self.clientId,
        localApiEndpoint: _self.localApiEndpoint,
      });

      let authResult;
      try {
        authResult = await IDCardAuthInstance.start();
      } catch (error) {
        console.error(error);
      }
      mutations.loadingEnd();
      if (authResult) {
        _self.successCallback(authResult);
      } else {
        console.log('fail');
      }
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
