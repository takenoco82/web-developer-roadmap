<template>
  <div class="v-messages theme--light error--text" v-if="errorMessage">
    {{errorMessage}}
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      required: true
    }
  },
  computed: {
    errorMessage() {
      const fieldError = this.errors.find(error => error.field === this.field);
      if (fieldError !== undefined) {
        return fieldError.message;
      }
      return "";
    }
  }
}
</script>
