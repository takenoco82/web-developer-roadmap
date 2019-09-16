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
              :error-messages="errors.username"
              required
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              label="e-mail"
              :error-messages="errors.email"
              required
            >
            </v-text-field>
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
      valid: true,
      username: "",
      email: "",
      // エラーメッセージ格納オブジェクト
      errors: {
        username: "",
        email: ""
      }
    }
  },
  methods: {
    save() {
      console.log("click save");

      // API実行前にエラーをクリアする
      this.resetErrors();

      this.postUser(this.username, this.email).then(user => {
        console.log(user);
        this.$router.push("/users");
      }).catch(error => {
        // TODO ホントは400 BadRequest の場合だけやるとか色々ある
        const errResponse = JSON.parse(error.response.text);
        // APIからかえってきたエラーメッセージを設定
        errResponse.errors.map(error => {
          this.errors[error.field] = error.message;
        });
        console.log(this.errors);
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
    resetErrors() {
      for (const field of Object.keys(this.errors)) {
        this.errors[field] = "";
      }
      console.log(this.errors);
    }
  }
}
</script>
