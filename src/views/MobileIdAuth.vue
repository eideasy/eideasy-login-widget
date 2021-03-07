<script>
import AppForm from '../components/AppForm';
import {actions, getters} from '../store';

export default {
  name: 'MobileIdAuth',
  components: {
    AppForm,
  },
  data() {
    return {
      formValue: {},
      fieldErrors: {},
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
    getFieldErrors(result) {
      console.log(result);
      let errors = {};
      if (result.error &&
          result.error.response &&
          result.error.response.data &&
          result.error.response.data.errors
      ) {
        errors = result.error.response.data.errors;
      }
      return errors;
    },
    authenticate() {
      this.loadingStart();
      this.clearFlashMessages();
      this.$eidEasyClient.mobileId.authenticate({
        ...this.formValue,
        fail: (result) => {
          this.addFlashMessage(result);
          this.fieldErrors = this.getFieldErrors(result);
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
  <div>
    <AppForm
      id="mobileIdForm"
      v-model="formValue"
      :schema="schema"
      :on-submit="authenticate"
      :errors="fieldErrors"
    />

    <pre>
      {{ formValue }}
    </pre>
  </div>
</template>

<style lang="scss" module>

</style>
