import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    users: [{username: "niska", avatar: ""},{username: "alkpote", avatar: ""},{username: "booba", avatar: ""},],
    messages: [{sender: "niska", message:"BENDO BENDO BENDO C CHARO"}, {sender: "Alkpote", message:"Jme suis évadé de l'école"}],
    pseudo: ''
}


const mutations = {
    addmessage: function(state, sender, message){
        state.messages.push({sender: sender, message: message})
    },

    setPseudo: function(state, pseudo){
        state.pseudo = pseudo
    }

}

const getters = {
    messages: state => state.messages,
    users: state => state.users,
}

let store =  new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {

    },
    strict: true,
})


global.store = store

export default store