<template>
            <div class="main-app">
                <transition name="popup">
                    <Login v-if="loggedIn === false" @sendPseudo="registerUser"/>
                </transition>
                <UserStatusBar />
                <MessagesBoxIndex />
            </div>
</template>

<script>
    // import Store from 'store/UserStore.js'
    import UserStatusBar from '@/components/UserStatusBar'
    import { cookieGetter } from "@/helpers/cookiesGetter"
    import MessagesBoxIndex from '@/components/MessagesBoxIndex'
    import TheHeader from '@/components/TheHeader'
    import Vuex from 'vuex'
    import Login from '@/components/Login'

    export default {

        // store: store,
        name: 'Chat',
        data() {
            return {
                pseudo: 'Guest',
                loggedIn: false,
            }
        },
        methods: {
            ...Vuex.mapActions({
                setPseudo: 'setCurrentUser',
                toggleMode: 'toggleViewMode'
            }),
            toggleLoggedIn (){
                this.loggedIn = !this.loggedIn
            },
            registerUser (pseudo) {
                //document.cookie = 'pseudo=' + pseudo
                this.toggleLoggedIn()
                //this.setPseudo(cookieGetter('pseudo'))
                this.setPseudo(pseudo)
            },
            switchMode (){
                this.toggleMode()
            }
        },
        mounted() {
            //console.log(cookieGetter('pseudo'))
            if(cookieGetter('pseudo')){
                this.setPseudo(cookieGetter('pseudo'))
                this.loggedIn = true
            }

            window.addEventListener('keyup', (e) => {
                e.key === 'Alt' ? this.switchMode() : ''
            })
        }
        ,
        components: { UserStatusBar, MessagesBoxIndex, TheHeader, Login}
    }

</script>

<style lang="css">
    .main-app{
        display: flex;
        width: 100vw;
        height: 100vh;
    }

    .popup-leave-to{
        opacity: 0
    }

    .popup-leave-active{
        transition: all .6s;
    }
</style>