<script>
import AppForm from '../components/AppForm';

export default {
  name: 'SmartIdAuth',
  components: {
    AppForm,
  },
  data() {
    return {
      formValue: {},
      schema: [
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
  <AppForm
    id="smartIdForm"
    v-model="formValue"
    :schema="schema"
  />
</template>

<style lang="scss" module>

</style>
