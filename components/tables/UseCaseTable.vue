<template>
  <v-card>
    <v-card-title>
      Use Cases logs
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Data', value: 'data' },
        { text: 'Actor', value: 'actor' },
        { text: 'ExecutionTime', value: 'executionTime' },
        { text: 'Subscribers', value: 'subscribers' },
        { text: 'Status', value: 'status' },
        { text: 'FailedReason', value: 'failedReason' },
        { text: 'Guid', value: 'guid' },
        { text: 'ExercutionDate', value: 'exercutionDate' }
      ]
    }
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>