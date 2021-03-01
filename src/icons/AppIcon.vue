<script>
import IconBase from './IconBase.vue';
import IconSmartId from './IconSmartId.vue';
import IconIdCard from './IconIdCard.vue';
import IconMobileId from './IconMobileId.vue';

export default {
  name: 'AppIcon',
  components: {
    IconBase,
    IconSmartId,
    IconIdCard,
    IconMobileId,
  },
  props: {
    iconName: String,
  }
}
</script>

<template>
  <IconBase>
    <component :is="iconName"></component>
  </IconBase>
</template>

