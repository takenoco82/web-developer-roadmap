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
          <template v-slot:item.user_id="{ item }">
            <UserEdit :user-id=item.user_id v-on:refresh="udpateUsers" />
            {{ item.user_id }}
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </div>
    </v-container>

    <UserNew v-on:refresh="udpateUsers" />
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
      users: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'id', value: 'user_id' },
        { text: 'user name', value: 'username' },
        { text: 'e-mail address', value: 'email' },
      ],
    }
  },
  methods: {
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
    udpateUsers() {
      this.getUsers().then(users => {
      this.users = users.map(user => {
        user.url = `/user_list/${user.user_id}`;
        // username = 'Yvette Ebert' -> avatar_text = 'YE'
        user.avatar_text = user.username.split(" ").map(item => item.substring(0, 1)).join("");
        return user;
      });
    });
    }
  },
  // created で arrow関数を使うと メソッドが this で呼び出せなくなる？
  created() {
    this.udpateUsers();
  }
}
</script>
