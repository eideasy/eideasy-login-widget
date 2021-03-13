<script>
import MethodButton from '../components/MethodButton.vue';
import {actions, getters} from '../store';
import {enabledMethodsByCountry} from '../config';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  },
  data() {
    return {
      enabledMethodsByCountry,
    }
  },
  computed: {
    ...getters,
    authMethods() {
      return enabledMethodsByCountry[this.countryCode];
    },
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
      <div
        v-for="method in authMethods"
        :key="method.name"
        :class="$style.unit"
      >
        <MethodButton
          :disabled="isLoading"
          :icon-name="method.iconName"
          :on-click="() => changeView(method.viewName)"
        >
          {{ $t(method.name) }}
        </MethodButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.row {
  display: flex;
  justify-content: center;
  margin-left: -$spacer-3;
  margin-right: -$spacer-3;
  flex-wrap: wrap;
}

.unit {
  padding: $spacer-2 $spacer-3;
}
</style>
