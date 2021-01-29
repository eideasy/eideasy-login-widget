<template>
  <div>
    I am method selection
    <MethodButton iconName="IconIdCard"/>
  </div>
</template>

<script>
import MethodButton from '../common/MethodButton.vue';

export default {
  name: 'MethodSelection',
  components: {
    MethodButton,
  }
}
</script>
