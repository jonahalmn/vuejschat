<template>
            <div class="main-app">
                <transition name="popup">
                    <Login v-if="loggedIn === false" @sendPseudo="registerUser"/>
                </transition>
                <UserStatusBar />
                <MessagesBoxIndex />
                <transition name="show-hint">
                    <Hint v-if="popupVisible" :name="currentUser" message="Appuies sur Alt pour passer en mode propre" />
                </transition>
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
    import Hint from '@/components/Hint'

    export default {

        // store: store,
        name: 'Chat',
        data() {
            return {
                pseudo: 'Guest',
                loggedIn: false,
                popupVisible: false,
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
                this.seeHint()
            },
            switchMode (){
                this.toggleMode()
            },
            seeHint(){
                this.popupVisible = true
                setTimeout(
                () => {
                    this.popupVisible = false
                }, 3000)
            }
        },
        computed: {
            ...Vuex.mapGetters(['currentUser'])
        }
        ,
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
        components: { UserStatusBar, MessagesBoxIndex, TheHeader, Login, Hint}
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

    .show-hint-enter{
        transform: translateY(120px);
        opacity:0
    }

    .show-hint-enter-to{
        transform: translateY(0px);
        opacity:1
    }

    .show-hint-enter-active{
        transition: all 1s;
    }

    .show-hint-leave-to{
        transform: translateY(120px);
        opacity:0
    }

    .show-hint-leave{
        transform: translateY(0px);
        opacity:1
    }

    .show-hint-leave-active{
        transition: all 1s;
    }
</style>