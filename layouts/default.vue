<template>
  <v-app id="inspire">
    <!-- <router-view :key="$route.fullPath" /> -->
    <v-navigation-drawer v-model="drawer" app>
      <left-sidebar />
    </v-navigation-drawer>

    <!-- Gornji Nav bar -->
    <v-app-bar app color="indigo" dark>
      <!-- Event na ikonicu -->
      <v-row justify="space-between" align="center">
        <v-col cols="3">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="6">
          <user-container />
        </v-col>
      </v-row>

      <!-- <NavBar /> -->
    </v-app-bar>
    <!-- Content sa ucitavanjem Layera -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- Footer -->
    <v-footer color="indigo" app>
      <v-layout justify-center wrap>
        <span class="white--text">&copy; 2019</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import LeftSidebar from '~/components/navBars/LeftSidebar'
import UserContainer from '~/components/user/UserContainer'

export default {
  props: {
    source: String
  },
  components: {
    LeftSidebar,
    UserContainer
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style lang="scss" scoped>
</style>