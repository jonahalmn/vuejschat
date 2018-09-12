<template>
    <div>
        <h1>Index des Messages</h1>
        <ul>
            <MessageBox 
                v-for="message in messages"
                v-bind:message="message" />
        </ul>
    </div>
</template>


<script>
    import Vuex from 'vuex'
    import MessageBox from '@/components/MessageBox'

    export default {
        name: 'MessageBoxIndex',
        data() {
            return {

            }
        },
        components: { MessageBox },
        methods: {
            ...Vuex.mapActions({
                
            })
        },
        computed: {
            ...Vuex.mapGetters([
                'messages'
            ])
        }
    }
</script>