<template>
    <div><p>Content de vous voir {{currentUser}}</p></div>
</template>

<script>

    import Vuex from 'vuex'

    export default {
        name: 'TheHeader',
        data() {
            return{
                
            }
        },
        computed: {
            ...Vuex.mapGetters(['currentUser'])
        }
    }
</script>