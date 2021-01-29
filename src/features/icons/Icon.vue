<template>
  <IconBase>
    <component :is="iconName"></component>
  </IconBase>
</template>

<script>
import IconBase from './IconBase.vue';
import IconSmartId from './IconSmartId.vue';
import IconIdCard from './IconIdCard.vue';

export default {
  name: 'Icon',
  components: {
    IconBase,
    IconSmartId,
    IconIdCard,
  },
  props: {
    iconName: String,
  }
}
</script>
