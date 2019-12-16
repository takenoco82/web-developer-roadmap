<template>
  <v-container>
    <input-form :initialData="fields" @save-item="save"></input-form>
  </v-container>
</template>

<script>
import InputForm from "@/components/InputForm.vue";

export default {
  components: {
    "input-form": InputForm
  },
  data() {
    return {
      fields: {
        name: null,
        email: null,
        hobbies: [{ name: "aha", age: 12 }, { name: "ihi", age: 20 }]
      }
    };
  },
  methods: {
    save(form) {
      console.log(form);
    }
  }
};
</script>
