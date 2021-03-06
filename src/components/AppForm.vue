<script>
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

// TODO: perhaps create a component called FormElement,
//  that knows how to render a button or a form field or anything else
export default {
  name: 'AppForm',
  components: {
    AppInput,
    AppButton,
  },
  props: {
    schema: {
      required: true,
      type: Array,
    }
  }
}
</script>

<template>
  <form>
    I am form
    {{ schema }}
    <AppInput
        type="text"
        id=""
    >
      <template v-slot:label>{{ $t('personalIdCode') }}</template>
    </AppInput>
    <AppButton>{{ $t('logIn') }}</AppButton>
  </form>
</template>

<style lang="scss" module>

</style>
