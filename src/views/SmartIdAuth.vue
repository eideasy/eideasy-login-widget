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
  methods: {
    changeId() {
      this.formValue.idcode = this.formValue.idcode + 'asdfa';
    }
  }
}
</script>

<template>
  <div>
    <AppForm
      id="smartIdForm"
      v-model="formValue"
      :schema="schema"
    />

    <button @click="changeId">
      Chnage id
    </button>
  </div>
</template>

<style lang="scss" module>

</style>
