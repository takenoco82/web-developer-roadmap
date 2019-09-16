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
            >
            </v-text-field>
            <ErrorMessage v-bind:errors=errors field="email" />
          </v-card-text>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import Sandbox from "sandbox";
import ErrorMessage from "@/components/ErrorMessage";

export default {
  data() {
    return {
      username: "",
      email: "",
      errors: []
    }
  },
  methods: {
    save() {
      console.log("click save");
      this.postUser(this.username, this.email).then(user => {
        console.log(user);
        this.$router.push("/users");
      }).catch(error => {
        // TODO ホントは400 BadRequest の場合だけやるとか色々ある
        const errResponse = JSON.parse(error.response.text);
        this.errors = errResponse.errors;
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
  },
  components: {
    ErrorMessage
  }
}
</script>
