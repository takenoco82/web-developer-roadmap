<template>
  <div>
    <h1>This is The users page</h1>
    <v-container>
      <div>
        <v-data-table
          :headers="headers"
          :items="users"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>User List</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <div class="flex-grow-1"></div>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn class="mx-1" fab small dark color="primary" v-on="on" @click="newItem">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-form @submit.prevent="saveItem">
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
                        v-model="editedItem.username"
                        label="user name"
                        :error-messages="errors.username"
                        required
                      ></v-text-field>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="editedItem.email"
                        label="e-mail"
                        :error-messages="errors.email"
                        required
                      ></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-form>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </div>
    </v-container>
    </div>
</template>

<script>
import Sandbox from "sandbox";
import UserNew from "@/components/UserNew";
import UserEdit from "@/components/UserEdit";

export default {
  components: {
    UserNew,
    UserEdit
  },
  data() {
    return {
      dialog: false,
      users: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'id', value: 'user_id' },
        { text: 'user name', value: 'username' },
        { text: 'e-mail address', value: 'email' },
        { text: 'actions', value: 'action', sortable: false },
      ],
      editedItem: {
        userId: "",
        username: "",
        email: ""
      },
      // エラーメッセージ格納オブジェクト
      errors: {
        username: "",
        email: ""
      }
    }
  },
  methods: {
    initialize() {
      this.getUsers().then(users => {
        this.users = users.map(user => {
          user.url = `/user_list/${user.user_id}`;
          // username = 'Yvette Ebert' -> avatar_text = 'YE'
          user.avatar_text = user.username.split(" ").map(item => item.substring(0, 1)).join("");
          user.action = "";
          return user;
        });
      });
    },
    newItem() {
      this.editedItem.userId = "";
      this.editedItem.username = "";
      this.editedItem.email = "";
      // NOTE: activator を使っているので dialog = true はしなくてもよい
      // this.dialog = true;
    },
    editItem(item) {
      this.editedItem.userId = item.user_id;
      this.editedItem.username = item.username;
      this.editedItem.email = item.email;
      this.dialog = true;
    },
    deleteItem(item) {
      console.log(item);
      if (confirm('Are you sure you want to delete this item?')) {
        this.deleteUser(item.user_id).then(() => {
          this.initialize();
        })
      }
    },
    saveItem() {
      console.log("click save");
      // API実行前にエラーをクリアする
      this.resetErrors();

      if (this.editedItem.userId === "") {
        this.postUser(this.editedItem).then(user => {
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
      } else {
        this.putUser(this.editedItem).then(user => {
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
      }
    },
    getUsers() {
      const defaultClient = Sandbox.ApiClient.instance;

      // Configure API key authorization: api_key
      const api_key = defaultClient.authentications['api_key'];
      api_key.apiKey = "YOUR API KEY"
      // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
      //api_key.apiKeyPrefix['api_key'] = "Token"

      const apiInstance = new Sandbox.UsersApi()
      const opts = {};
      return apiInstance.getUsers(opts).then(data => {
        console.log('API called successfully. Returned data: ' + data);
        return data.users;
      }).catch(error => {
        console.error(error);
        throw error;
      });
    },
    postUser(editedItem) {
      const defaultClient = Sandbox.ApiClient.instance;

      const apiInstance = new Sandbox.UsersApi();
      const body = new Sandbox.WriteUser(); // WriteUser | Created user object
      body.username = editedItem.username
      body.email = editedItem.email

      return apiInstance.postUser(body).then(data => {
        console.log('API called successfully. UsersApi.postUser');
        return data;
      }).catch(error => {
        console.error(error);
        throw error;
      });
    },
    putUser(editedItem) {
      const defaultClient = Sandbox.ApiClient.instance;

      const apiInstance = new Sandbox.UsersApi();
      const body = new Sandbox.WriteUser(); // WriteUser | Created user object
      body.username = editedItem.username
      body.email = editedItem.email

      return apiInstance.putUser(editedItem.userId, body).then(data => {
        console.log('API called successfully. UsersApi.putUser');
        return data;
      }).catch(error => {
        console.error(error);
        throw error;
      });
    },
    deleteUser(userId) {
      const defaultClient = Sandbox.ApiClient.instance;

      const apiInstance = new Sandbox.UsersApi();
      return apiInstance.deleteUser(userId).then(() => {
        console.log('API called successfully. UsersApi.deleteUser');
        return "";
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
      this.dialog = false;
      this.initialize();
    }
  },
  // created で arrow関数を使うと メソッドが this で呼び出せなくなる？
  created() {
    this.initialize();
  }
}
</script>
