<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="name"
          v-model="fields.name"
          :error-messages="errors.name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="email"
          v-model="fields.email"
          :error-messages="errors.email"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-container>
        <span class="mr-2">hobby</span>
        <v-btn fab x-small color="primary" @click="addHobby">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <v-row v-for="(item, index) in fields.hobbies" :key="index">
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="hobby name"
              prepend-icon="delete"
              :value="item.name"
              :error-messages="errors.hobbies[index].name"
              @input="updateHobby(index, 'name')"
              @click:prepend="removeHobby(index)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="hobby age"
              :value="item.age"
              :error-messages="errors.hobbies[index].age"
              @input="updateHobby(index, 'age')"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-btn @click="saveItem" color="primary">save</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: {
    initialData: Object,
    errors: Object
  },
  data() {
    return {
      fields: {
        name: null,
        email: null,
        hobbies: []
      }
    };
  },
  methods: {
    initilize() {
      console.log("Input form initilized.");
      this.fields = JSON.parse(JSON.stringify(this.initialData));
    },
    addHobby() {
      console.log("Hobby added.");
      this.fields.hobbies.push({ name: null, age: null });
      this.$emit("add-hobby");
    },
    updateHobby(index, attr) {
      console.log("Hobby updated.", index, attr, event.target.value);
      console.debug(this.fields.hobbies);
      this.fields.hobbies[index][attr] = event.target.value;
    },
    removeHobby(index) {
      console.log("Hobby removed.", index);
      this.fields.hobbies.splice(index, 1);
      this.$emit("remove-hobby", index);
    },
    saveItem() {
      console.log("save clicked.");
      this.$refs.form.resetValidation();
      this.$emit("save-item", this.fields);
    }
  },
  created() {
    this.initilize();
  }
};
</script>
