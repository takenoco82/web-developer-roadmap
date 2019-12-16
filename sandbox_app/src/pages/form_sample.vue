<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="name" v-model="fields.name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="email" v-model="fields.email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <p>hobby</p>
          <v-btn fab x-small color="primary" @click="addHobby">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
          <v-row v-for="(item, index) in fields.hobbies" :key="index">
            <v-col>
              <v-text-field
                label="hobby"
                prepend-icon="delete"
                :value="item"
                @input="updateHobby(index)"
                @click:prepend="removeHobby(index)"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-btn @click="save" color="primary">save</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        name: null,
        email: null,
        hobbies: ["aha", "ihi"]
      }
    };
  },
  methods: {
    save() {
      console.log(this.field);
    },
    addHobby() {
      this.fields.hobbies.push("");
    },
    updateHobby(index) {
      console.log("updateHobby", event.target.value);
      console.log(this.fields.hobbies);
      this.fields.hobbies[index] = event.target.value;
    },
    removeHobby(index) {
      console.log("removeHobby clicked", index);
      this.fields.hobbies.splice(index, 1);
    }
  }
};
</script>
