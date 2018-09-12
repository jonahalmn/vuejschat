<template>
    <div><UserStatusBar />
    <MessagesBoxIndex /></div>
</template>

<script>
    // import Store from 'store/UserStore.js'
    import UserStatusBar from '@/components/UserStatusBar'
    import MessagesBoxIndex from '@/components/MessagesBoxIndex'

    export default {
        // store: store,
        name: 'Chat',
        data() {
            return {
                pseudo: 'Guest'
            }
        },
        methods: {

        },
        created: function(){
            console.log(this.pseudo)
        }
        ,
        components: { UserStatusBar, MessagesBoxIndex}
    }

</script>