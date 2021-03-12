<script>
import AppForm from '../components/AppForm';
import {actions, getters} from '../store';
import getFieldErrors from '../getFieldErrors';
import AppSpinner from '../components/AppSpinner';
import AppButton from '../components/AppButton';

export default {
  name: 'MobileIdAuth',
  components: {
    AppForm,
    AppSpinner,
    AppButton,
  },
  data() {
    return {
      formValue: {},
      fieldErrors: {},
      challenge: undefined,
      authProcess: {},
      schema: [
        {
          type: 'tel',
          name: 'phone',
          label: this.$t('phoneNumber'),
          validation: ['required'],
        },
        {
          type: 'text',
          name: 'idcode',
          label: this.$t('personalIdCode'),
          validation: ['required'],
        },
        {
          type: 'submit',
          label: this.$t('logIn')
        }
      ]
    }
  },
  computed: {
    ...getters,
  },
  beforeDestroy() {
    this.cancel();
  },
  methods: {
    ...actions,
    clearErrors() {
      this.fieldErrors = {};
    },
    cancel() {
      const {cancel} = this.authProcess;
      if (cancel) {
        cancel();
      }
    },
    authenticate() {
      this.loadingStart();
      this.clearFlashMessages();
      this.clearErrors();
      this.authProcess = this.$eidEasyClient.mobileId.authenticate({
        ...this.formValue,
        started: (result) => {
          if (result.data && result.data.challenge) {
            this.challenge = result.data.challenge;
            this.loadingEnd();
          }
        },
        fail: (result) => {
          if (!result.cancelled) {
            this.addFlashMessage(result);
          }
          this.fieldErrors = getFieldErrors(result);
        },
        success: (result) => {
          this.$eidEasyOnSuccess(result);
        },
        finished: () => {
          this.challenge = undefined;
          this.loadingEnd();
        },
      });
    }
  },
}
</script>

<template>
  <div>
    <div
      v-if="challenge"
      :class="$style.challenge"
    >
      <div :class="$style.loader">
        <AppSpinner scheme="secondary" />
      </div>
      <div :class="$style.challengeTitle">
        {{ $t('yourVerificationCode') }}
      </div>
      <div :class="$style.challengeCode">
        {{ challenge }}
      </div>
      <AppButton
        scheme="secondary"
        :on-click="() => cancel()"
      >
        {{ $t('cancel') }}
      </AppButton>
    </div>
    <div v-else>
      <AppForm
        id="mobileIdForm"
        v-model="formValue"
        :schema="schema"
        :on-submit="authenticate"
        :errors="fieldErrors"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.challenge {
  text-align: center;
  color: $primary;
}

.loader {
  font-size: 14px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $spacer-6;
}

.challengeTitle {
  text-transform: uppercase;
  font-size: $font-size-sm;
  font-weight: $font-weight-bold;
  letter-spacing: 0.03667em;
}

.challengeCode {
  font-size: 28px;
  font-weight: $font-weight-bold;
  letter-spacing: 0.005357em;
  margin-bottom: $spacer-4;
}
</style>
