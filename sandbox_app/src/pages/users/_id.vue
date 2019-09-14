<template>
  <div>
    <h1>This is The user page</h1>
    <v-container>
      <p>{{user_id}}</p>
      <p>{{username}}</p>
      <p>{{email}}</p>
    </v-container>
  </div>
</template>

<script>
import Sandbox from "sandbox";

export default {
  data() {
    return {
      user_id: "",
      username: "",
      email: ""
    }
  },
  methods: {
    getUser(userId) {
      const defaultClient = Sandbox.ApiClient.instance;

      const apiInstance = new Sandbox.UsersApi();
      return apiInstance.getUser(userId).then(data => {
        console.log('API called successfully. Returned data: ' + data);
        return data;
      }).catch(error => {
        console.error(error);
        throw error;
      });
    }
  },
  created() {
    const userId = this.$route.params.id;

    this.getUser(userId).then(user => {
      this.user_id = user.user_id;
      this.username = user.username;
      this.email = user.email;
    });
  }
}
</script>
