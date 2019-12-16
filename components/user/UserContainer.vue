<template>
  <div>
    <v-row v-if="auth" align="center">
      <v-col cols="3">
        <p class="mb-0">{{user.username}}</p>
      </v-col>
      <v-col>
        <v-btn @click="onLogout">Logout</v-btn>
      </v-col>
    </v-row>
    <v-row v-else align="center">
      <v-col cols="3">
        <v-btn color="primary" @click="$router.push({ name: 'login'})">Login</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    methods:{
        onLogout(){
            console.log("logout hendler")
        }
    },
computed: {
    ...mapState({ user: state => state.login.user }),
    auth: function() {
      return this.user.token ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>