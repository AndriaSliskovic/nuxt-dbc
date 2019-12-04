<template>
  <v-card height="400" width="256" class="mx-auto">
    <v-list-item-content>
      <v-list-item-title class="title">
        <v-icon>mdi-airplay</v-icon>DBC 3.0
      </v-list-item-title>
    </v-list-item-content>
    <v-divider />
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.id">
        <nuxt-link :to="item.route">
          <v-list-item-content>
            <v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              {{item.title}}
            </v-list-item-title>
          </v-list-item-content>
        </nuxt-link>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { leviMenuSettinngs } from '~/settings.js'
export default {
  methods: {
    clickHandler(id) {}
  },
  data() {
    return {
      items: leviMenuSettinngs
    }
  }
}
</script>

<style scoped>

</style>