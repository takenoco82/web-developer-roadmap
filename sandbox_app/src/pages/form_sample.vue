<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="name" v-model="field.name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="email" v-model="field.email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-btn @click="save">save</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      field: {
        name: null,
        email: null
      }
    };
  },
  methods: {
    save() {
      console.log(this.field);
    }
  }
};
</script>
