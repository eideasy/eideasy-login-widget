<script>
import FormButton from './FormButton';
import FormField from './FormField';

const formComponentsByType = {
  submit: 'FormButton',
  text: 'FormField',
  number: 'FormField',
  tel: 'FormField',
};

export default {
  name: 'AppForm',
  components: {
    FormField,
    FormButton,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    schema: {
      required: true,
      type: Array,
    }
  },
  data() {
    return {
      formComponentsByType,
    }
  },
  methods: {
    formComponentId(modifier) {
      if (modifier) {
        return this.id + '_' + modifier;
      }
      return undefined;
    },
  }
}
</script>

<template>
  <form :id="id">
    <div
      v-for="item in schema"
      :key="item.name + item.label"
      :class="$style.formElement"
    >
      <Component
        :is="formComponentsByType[item.type]"
        v-bind="{...item, id: formComponentId(item.name)}"
      />
    </div>
  </form>
</template>

<style lang="scss" module>
.formElement {
  display: block;
}
</style>
