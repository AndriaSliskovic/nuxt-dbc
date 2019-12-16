<template>
  <v-card>
    <v-col cols="6">
    <v-form @submit.prevent="register">
      <v-text-field v-model="name" label="Name:" dense></v-text-field>
      <v-text-field v-model="email" label="Email:" dense></v-text-field>
      <v-text-field v-model="password" label="Password:" dense></v-text-field>
      <v-btn type="submit" name="button">
        Register
      </v-btn>
    </v-form>
    </v-col>

  </v-card>
</template>

<script>

export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    makeUserObject(){
      return {
        name: this.name,
        email: this.email,
        password: this.password
      }
    },
    register () {
      const dataObject=this.makeUserObject()
      console.log(dataObject)
      // this.$store
      //   .dispatch('register', {
      //     name: this.name,
      //     email: this.email,
      //     password: this.password
      //   })
      //   .then(() => {
      //     this.$router.push({ name: 'dashboard' })
      //   })
    }
  }
}
</script>

<style scoped>
</style>
