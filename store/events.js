import EventService from '~/services/EventService'

export const state = () => ({
    allEvents: [],
    event:{}
})

export const getters = {}

export const mutations = {
    'GET_ALL_EVENTS'(state, payload) {
        state.allEvents = payload
    },
    'GET_SELECTED_EVENT'(state,payload){
        state.event=payload
    }
}

export const actions = {
    getAllEvents({ commit }) {
        console.log("svi eventi")
        return EventService.getEvents()
        .then(response=>commit('GET_ALL_EVENTS', response.data))      
    },
    getEvent({commit},id){
        console.log("selektovani id :",id)
        return EventService.getEvent(id)
        .then(res=>commit('GET_SELECTED_EVENT',res.data))
    }
}