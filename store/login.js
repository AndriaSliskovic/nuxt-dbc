import LoginService from '~/services/loginService'

export const state = () => ({
    user: {}
})

export const getters = {}

export const mutations = {
    'LOGIN_USER'(state, payload) {
        console.log("mutator user logina", payload)
        state.user = payload
    },
}

export const actions = {
    loginUser({ commit }, userData) {
        LoginService.login(userData)
            .then((response) => userData.token = response.data.Token)
            .catch(error => {
                return console.log("error message", error)
            })
            .then(()=>commit('LOGIN_USER', userData))
    }

}