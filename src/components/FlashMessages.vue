<script>
import {getters} from '../store';
import AppAlert from './AppAlert';

export default {
  name: 'FlashMessages',
  components: {
    AppAlert,
  },
  computed: {
    ...getters,
  }
}
</script>

<template>
  <div v-if="flashMessages.length">
    <div v-for="message in flashMessages" :scheme="message.scheme" :key="message.text">
      <AppAlert :scheme="message.scheme">
        {{ message.text }}
      </AppAlert>
    </div>
  </div>
</template>

<style lang="scss" module>

</style>
