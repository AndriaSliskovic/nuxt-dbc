<template>
  <v-card>
    <v-col cols="6">
      <v-card>
        <v-form @submit.prevent="login">
          <v-text-field v-model="name" label="Name:" dense></v-text-field>
          <v-text-field v-model="password" label="Password:" dense></v-text-field>
          <v-btn type="submit" name="button" color="primary">Login</v-btn>
        </v-form>
      </v-card>
    </v-col>
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
  </v-col>

    </v-col>
  </v-card>
</template>

<script>

import loginServis from '@/services/loginService'
import { mapState } from 'vuex'
import LoginService from '~/services/loginService'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      token:''
    }
  },
  methods: {
    makeUserObject() {
      return {
        username: this.name,
        password: this.password
      }
    },
   login() {
      const dataObject = this.makeUserObject()
      console.log(dataObject)
     this.$store
        .dispatch('login/loginUser',dataObject)
        .then(() => {
          this.$router.push({ name: 'home'})
        })
    }
  },
    computed: {
      ...mapState({user: state => state.login.user})
      },
      watch:{
        token:function(){
          return this.user.token
        }
      }
      
}
</script>

<style scoped>
</style>
