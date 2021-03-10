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
  <div>
    <AppAlert
      v-for="message in flashMessages"
      :key="message.text"

      :scheme="message.scheme"
    >
      {{ message.text }}
    </AppAlert>
  </div>
</template>

