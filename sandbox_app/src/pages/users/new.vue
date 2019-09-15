<template>
  <div>
    <h1>This is The new user page</h1>
    <v-container>
      <v-form @submit.prevent="save">
        <v-card>
          <v-card-actions>
            <v-btn icon @click="$router.go(-1)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-row align="center" justify="end">
              <v-btn class="mr-3" color="primary" type="submit">Save</v-btn>
            </v-row>
          </v-card-actions>
          <v-card-title>
            <v-text-field
              v-model="username"
              label="user name"
              required
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              label="e-mail"
              required
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import Sandbox from "sandbox";

export default {
  data() {
    return {
      username: "",
      email: ""
    }
  },
  methods: {
    save() {
      console.log("click save");
      this.postUser(this.username, this.email).then(user => {
        console.log(user);
        this.$router.push("/users");
      });
    },
    postUser(username, email) {
      const defaultClient = Sandbox.ApiClient.instance;

      const apiInstance = new Sandbox.UsersApi();
      const body = new Sandbox.WriteUser(); // WriteUser | Created user object
      body.username = username
      body.email = email

      return apiInstance.postUser(body).then(data => {
        console.log('API called successfully. UsersApi.postUser');
        return data;
      }).catch(error => {
        console.error(error);
        throw error;
      });
    },
  }
}
</script>
