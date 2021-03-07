<script>
import MethodButton from '../components/MethodButton.vue';
import {actions, getters} from '../store';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  },
  computed: {
    ...getters,
  },
  methods: {
    ...actions,
    authenticateWithIdCard() {
      this.loadingStart();
      this.clearFlashMessages();
      this.$eidEasyClient.idCard.authenticate({
        fail: (result) => {
          this.addFlashMessage(result);
        },
        success: (result) => {
          this.$eidEasyOnSuccess(result);
        },
        finished: () => {
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
          :disabled="isLoading"
          icon-name="IconMobileId"
          :on-click="() => changeView('MobileIdAuth')"
        >
          {{ $t("mobileId") }}
        </MethodButton>
      </div>
      <div :class="$style.unit">
        <MethodButton
          :disabled="isLoading"
          icon-name="IconSmartId"
          :on-click="() => changeView('SmartIdAuth')"
        >
          {{ $t("smartId") }}
        </MethodButton>
      </div>
      <div :class="$style.unit">
        <MethodButton
          :disabled="isLoading"
          icon-name="IconIdCard"
          :on-click="authenticateWithIdCard"
        >
          {{ $t("idCard") }}
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
