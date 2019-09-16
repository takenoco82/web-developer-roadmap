<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn icon :dark="false" v-on="on">
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-form @submit.prevent="save">
        <v-card>
          <v-card-actions>
            <v-btn icon @click="dialog = false">
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
    </v-dialog>
  </v-row>
</template>

<script>
import Sandbox from "sandbox";

export default {
  data() {
    return {
      dialog: false,
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
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  methods: {
    save() {
      console.log("click save");

      // API実行前にエラーをクリアする
      this.resetErrors();

      this.postUser(this.username, this.email).then(user => {
        console.log(user);

        // 後処理
        this.cleanUp();
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
    getUser() {
      const defaultClient = Sandbox.ApiClient.instance;

      // Configure API key authorization: api_key
      const api_key = defaultClient.authentications['api_key'];
      api_key.apiKey = "YOUR API KEY"
      // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
      //api_key.apiKeyPrefix['api_key'] = "Token"

      const apiInstance = new Sandbox.UsersApi()
      return apiInstance.getUser(this.userId).then(data => {
        console.log('API called successfully. UsersApi.getUser');
        return data;
      }).catch(error => {
        console.error(error);
        throw error;
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
    },
    cleanUp() {
      // dataを初期化して、ダイアログを閉じる
      this.username = "";
      this.email = "";
      this.resetErrors();

      this.dialog = false;

      // 一覧を最新化する
      this.$emit("refresh");
    }
  },
  created() {
    this.getUser().then(user => {
      this.username = user.username;
      this.email = user.email;
    })
  }
}
</script>
