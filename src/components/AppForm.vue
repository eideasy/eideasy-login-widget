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
  model: {
    prop: 'formValue',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    schema: {
      required: true,
      type: Array,
    },
    formValue: {
      type: Object,
      default: () => ({})
    },
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
    handleInput(key, value) {
      this.formValue[key] = value;
      this.$emit('input', {
        ...this.formValue,
        [key]: value,
      })
    },
  }
}
</script>

<template>
  <form
    :id="id"
  >
    <div
      v-for="item in schema"
      :key="item.name + item.label"
      :class="$style.formElement"
    >
      <Component
        :is="formComponentsByType[item.type]"
        v-bind="{
          ...item,
          id: formComponentId(item.name),
          value: formValue[item.name],
        }"
        @input="(value) => handleInput(item.name, value)"
      />
    </div>
    <pre>
      {{ formValue }}
    </pre>
  </form>
</template>

<style lang="scss" module>
.formElement {
  display: block;
}

.formElement + .formElement {
  margin-top: $spacer-6;
}
</style>
