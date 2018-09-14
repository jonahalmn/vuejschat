import Vue from 'vue'
import Vuex from 'vuex'
import socketPlugin from '@/helpers/socketConnection'
import io from 'socket.io-client'

Vue.use(Vuex)
const socket = io.connect('https://bddi-2019-chat.herokuapp.com')
//const socket = io.connect('http://localhost:3000')

const plugin = socketPlugin(socket)

const state = {
    //users: [{username: "niska", avatar: "", color: "#FDEAEA"},{username: "alkpote", avatar: "", color: "#FDCAAA"},{username: "booba", avatar: "", color: "#FEEAEA"},{username: "Jonah", avatar: "", color:"#EEEEEE"}],
    users: [],
    messages: [{sender: "niska", message:"BENDO BENDO BENDO C CHARO"}, {sender: "Alkpote", message:"Jme suis évadé de l'école"}],
    pseudo: '',
    sent: [],
    lightMode: false,
}


const mutations = {
    ADD_MESSAGE: function(state, {sender, message}){
        state.messages.push({sender: sender, message: message})
    },
    TOGGLE_MODE: function(state){
        state.lightMode = !state.lightMode
    },
    SET_PSEUDO: function(state, pseudo){
        state.pseudo = pseudo
    },

    SEND_MESSAGE : function(state, {sender, message}){
        state.sent.push({sender: sender, message: message})
    },

    ADD_USER: function(state, {username, avatar, all}){
        if(state.users.length == 0){
            all.forEach(user => {
                state.users.push({username: user.username, avatar: user.avatar, color: randomizeColors(), isActive: true})
            })
        }else{
            state.users.push({username: username, avatar: avatar, color: randomizeColors(), isActive: true})
        }
    },
    DISCONNECT_USER: function(state, username){
        state.users.forEach(user => {
            console.log(username)
            username === user.username ? user.isActive = false : ''
        });
    }

}

function randomizeColors(){
    const colorsArray = ['#2bf96f', '#2ae5fa', '#fa772a', '#c543f6', '#4343f6']

    return colorsArray[Math.floor(Math.random()*colorsArray.length)];
}


const getters = {
    messages: state => state.messages,
    users: state => state.users,
    currentUser: state => state.pseudo,
    isWhite: state => state.lightMode
}

const actions = {
    sendMessage: function(store, {sender, message}){
        store.commit('SEND_MESSAGE', {sender, message})
    },

    setCurrentUser: function(store, pseudo){
        store.commit('SET_PSEUDO', pseudo)
    },

    toggleViewMode: function(store){
        store.commit('TOGGLE_MODE')
    }
}

let store =  new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true,
    plugins: [plugin]
})


global.store = store

export default store