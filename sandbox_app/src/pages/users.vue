<template>
  <div class="about">
    <h1>This is The users page</h1>
    <v-btn @click="get_users">Button</v-btn>
    <ul>
      <li v-for="user in users" :key="user.user_id">
        {{user.username}}
      </li>
    </ul>
  </div>
</template>

<script>
import Sandbox from "sandbox";

export default {
  data: () => {
    return {
      users: []
    }
  },
  methods: {
    get_users() {
      const defaultClient = Sandbox.ApiClient.instance;

      // Configure API key authorization: api_key
      const api_key = defaultClient.authentications['api_key'];
      api_key.apiKey = "YOUR API KEY"
      // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
      //api_key.apiKeyPrefix['api_key'] = "Token"

      const apiInstance = new Sandbox.UsersApi()
      const opts = {};
      apiInstance.getUsers(opts).then(data => {
        console.log('API called successfully. Returned data: ' + data);
        this.users = data.users
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
</script>
