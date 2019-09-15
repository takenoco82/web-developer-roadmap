<template>
  <div>
    <h1>This is The user page</h1>
    <v-container>
      <p>{{user_id}}</p>
      <v-card
        max-width="375"
        class="mx-auto"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="300px"
          dark
        >
          <v-row class="fill-height">
            <v-card-title>
              <v-btn dark icon @click="$router.go(-1)">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <div class="flex-grow-1"></div>

              <v-btn dark icon class="mr-4">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-title>

            <div class="flex-grow-1"></div>

            <v-card-title class="white--text pl-12 pt-12">
              <div class="display-1 pl-12 pt-12">{{username}}</div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list>
          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon color="indigo">mdi-phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>(650) 555-1234</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon color="indigo">mdi-email</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{email}}</v-list-item-title>
              <v-list-item-subtitle>Personal</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
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
