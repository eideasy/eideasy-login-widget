<script>
import AppForm from '../components/AppForm';

export default {
  name: 'MobileIdAuth',
  components: {
    AppForm,
  },
  data() {
    return {
      formValue: {},
      schema: [
        {
          type: 'tel',
          name: 'phone',
          label: this.$t('phoneNumber'),
          validation: 'required',
        },
        {
          type: 'text',
          name: 'idcode',
          label: this.$t('personalIdCode'),
          validation: 'required',
        },
        {
          type: 'submit',
          label: this.$t('logIn')
        }
      ]
    }
  },
}
</script>

<template>
  <div>
    <AppForm
      id="mobileIdForm"
      v-model="formValue"
      :schema="schema"
    />
  </div>
</template>

<style lang="scss" module>

</style>
