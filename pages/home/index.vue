<template>
  <div>
    <h3>Home page</h3>
    <v-card>
      <v-col cols="6">
        <h3>Results :</h3>
        <v-col>
          <h5>User name :</h5>
          <p>{{user.username}}</p>
        </v-col>
        <v-col>
          <h5>Email :</h5>
          <p>{{user.password}}</p>
        </v-col>
        <v-col>
          <h5>Token :</h5>
          <p>{{user.token}}</p>
          <div v-if="user.token">
            <p>ima token</p>
          </div>
          <div v-else>
            <p>Nema tokena</p>
          </div>
        </v-col>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import AppLayer from '~/layouts/AppLayer'
import { mapState } from 'vuex'

export default {
  layout: 'AppLayer',

  computed: mapState({
    user: state => state.login.user
  })
}
</script>

<style lang="scss" scoped>
</style>