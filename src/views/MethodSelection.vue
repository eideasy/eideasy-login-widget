<script>
import MethodButton from '../components/MethodButton.vue';
import {store, mutations} from '../store';
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
    async authenticateIdCard() {
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

<template>
  <div :class="$style.methodSelection">
    <div :class="$style.row">
      <div :class="$style.unit">
        <MethodButton
            iconName="IconMobileId"
        >
          {{$t("mobileId")}}
        </MethodButton>
      </div>
      <div :class="$style.unit">
        <MethodButton
            iconName="IconSmartId"
        >
          {{$t("smartId")}}
        </MethodButton>
      </div>
      <div :class="$style.unit">
        <MethodButton
            iconName="IconIdCard"
            :onClick="authenticateIdCard"
        >
          {{$t("idCard")}}
        </MethodButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.row {
  display: flex;
  justify-content: center;
  margin-left: -$spacer-2;
  margin-right: -$spacer-2;
}

.unit {
  padding: 0 $spacer-2;
}
</style>
