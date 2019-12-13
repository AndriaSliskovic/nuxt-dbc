import LoginService from '~/services/loginService'

export const state = () => ({
    user:{}
})

export const getters = {}

export const mutations = {
    'LOGIN_USER'(state,payload){
        console.log("mutator user logina",payload)
        state.user=payload
    },
    'SET_TOKEN'(state,payload){
        console.log("mutator token", payload)
        state.user.token=payload
    }
}

export const actions = {
    loginUser({commit},userData){
        LoginService.login(userData)

        .then((response)=>userData.token=response.data.Token)
        .then(console.log("login usera",userData))

        .then(commit('LOGIN_USER',userData))
        .catch(error => {
            return console.log("error message",error)
          })
        //.then((response)=>commit('SET_TOKEN',response.data.Token))

    }

}