<script>
import AppForm from '../components/AppForm';
import {actions, getters} from '../store';
import getFieldErrors from '../getFieldErrors';

export default {
  name: 'MobileIdAuth',
  components: {
    AppForm,
  },
  data() {
    return {
      formValue: {},
      fieldErrors: {},
      challenge: undefined,
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
  methods: {
    ...actions,
    clearErrors() {
      this.fieldErrors = {};
    },
    authenticate() {
      this.loadingStart();
      this.clearFlashMessages();
      this.clearErrors();
      this.$eidEasyClient.mobileId.authenticate({
        ...this.formValue,
        started: (result) => {
          if (result.response && result.response.data && result.response.data.challenge) {
            this.challenge = result.response.data.challenge;
            this.loadingEnd();
          }
        },
        fail: (result) => {
          this.addFlashMessage(result);
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
  }
}
</script>

<template>
  <div>
    <div v-if="challenge">
      {{ challenge }}
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

</style>
