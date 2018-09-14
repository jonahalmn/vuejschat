<template>
    <form class='new-message' action="" @submit.prevent="sendCurMessage">
        <input type="text" placeholder="... écrire ici" v-model="message">
        <button type="submit">ENVOOOOYER !</button>
    </form>
</template>

<script>

    import Vuex from 'vuex'

    export default {
        name: 'MessageForm',
        data() {
            return {
                message: ''
            }
        },
        methods:{
            ...Vuex.mapActions({
                sendMessage: 'sendMessage'
            }),
            sendCurMessage: function(){
                this.sendMessage( {sender: this.currentUser, message: this.message} )
                this.message = ''
            }
        },
        computed:{
            ...Vuex.mapGetters(['currentUser']
            )
        }
    }
</script>

<style lang="css" scoped>
    .new-message{
        display: flex;
        padding: 15px;
        justify-content: space-between;
        align-items: center;
    }

    .new-message input{
        width: 60%;
        padding: 10px 15px;
        border: 0;
        border-radius: 5px;
        font-family: 'Roboto Mono'
    }

    .new-message button{
        padding: 10px 15px;
        background: #75faa2;
        transition: all .3s;
        border: 0;
        font-weight: 700;
        border-radius: 5px;
    }

    .new-message button:hover{
        background: #2bf96f;
    }
</style>