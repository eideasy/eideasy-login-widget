<script>
import MethodButton from '../components/MethodButton.vue';
import {actions} from '../store';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  },
  methods: {
    ...actions,
    authenticateWithIdCard() {
      this.loadingStart();
      this.$eidEasyClient.idCard.authenticate({
        fail: (result) => {
          console.log(result);
        },
        success: (result) => {
          this.$eidEasyOnSuccess(result);
          console.log(result);
        },
        finished: (result) => {
          console.log(result);
          this.loadingEnd();
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
            :onClick="authenticateWithIdCard"
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
