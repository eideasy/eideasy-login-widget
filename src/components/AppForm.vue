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
      default: () => ({}),
    },
    onSubmit: {
      type: Function,
      default: () => {},
    }
  },
  data() {
    return {
      formComponentsByType,
      validationErrors: {},
    }
  },
  computed: {
    hasValidationErrors() {
      return Object.keys(this.validationErrors).length > 0;
    }
  },
  watch: {
    formValue: {
      handler() {
        this.validate();
      },
      immediate: false,
    },
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
    handleSubmit() {
      this.validate();
      if (!this.hasValidationErrors) {
        this.onSubmit();
      }
    },
    validate() {
      const validationErrors = {};
      this.schema.forEach(({name, validation}) => {
        const fieldValue = this.formValue[name];
        // do not validate fields that do not have validation rules
        // and fields that do not have a value yet i.e. fields that user has not yet touched
        // this avoids situations where user starts typing in one field, and all the other fields get
        // prematurely validated
        if (!validation || fieldValue === undefined) {
          return;
        }
        const fieldErrors = this.validateField(fieldValue, validation);
        if (fieldErrors.length) {
          validationErrors[name] = fieldErrors;
        }
      });
      this.validationErrors = validationErrors;
    },
    validateRule(value, rule) {
      if (rule === 'required') {
        if (!value) {
          return this.$t('thisFieldIsRequired');
        }
      }
    },
    validateField(value, rules) {
      return rules.reduce((acc, rule) => {
        const validationResult = this.validateRule(value, rule);
        if (validationResult) {
          acc.push(validationResult);
        }
        return acc;
      }, []);
    },
  }
}
</script>

<template>
  <form
    :id="id"
    @submit.prevent="handleSubmit"
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
          errors: validationErrors[item.name],
        }"
        @input="(value) => handleInput(item.name, value)"
      />
    </div>
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
