<script>
import MethodButton from '../components/MethodButton.vue';
import {store} from '../store';

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
    authenticateIdCard() {
      this.$eidEasyClient.idCard.authenticate({
        fail: (result) => {
          console.log(result);
        },
        success: (result) => {
          console.log(result);
        },
        finished: (result) => {
          console.log(result);
        },
      });
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
