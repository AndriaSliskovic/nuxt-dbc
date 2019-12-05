<template>
     <div>
        <h3>Home page</h3>
            <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
      </div>
</template>

<script>
import AppLayer from '~/layouts/AppLayer'
import EventService from '~/services/EventService'
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'
export default {
  layout: 'AppLayer',
  components: {
    EventCard
  },
  head() {
    return {
      title: 'Home'
    }
  },
    //Preko Vuexa
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/getAllEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events events at this time'
      })
    }
  },

  //Preko promisa
  // asyncData({ $axios }) {
  //     return $axios.get('http://localhost:3000/costumerList')
  //     .then(response => {
  //     return {
  //         costumerList: response.data
  //     }
  //     })
  // },

  //Preko async-await
  //async uvek vraca promis
  //await ceka da se promis izvrsi, moze se primeniti samo u async fji
  //   async asyncData({ $axios }) {
  //     try {
  //       const response = await $axios.get('http://localhost:3000/costumerList')
  //       return {
  //         costumerList: response.data
  //       }
  //     } catch (e) {
  //       error({
  //         statusCode: 503,
  //         message: 'Unable to fetch events events at this time'
  //       })
  //     }
  //   },

  computed: {
    ...mapState({
      events: state => state.events.allEvents
    })
  }
}
</script>

<style lang="scss" scoped>
</style>