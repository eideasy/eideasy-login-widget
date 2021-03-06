<script>
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default {
  name: 'SmartIdAuth',
  components: {
    AppInput,
    AppButton,
  }
}
</script>

<template>
  <div>
    <AppInput
        type="text"
        id=""
    >
      <template v-slot:label>{{ $t('personalIdCode') }}</template>
    </AppInput>
    <AppButton>{{ $t('logIn') }}</AppButton>
  </div>
</template>

<style lang="scss" module>

</style>
