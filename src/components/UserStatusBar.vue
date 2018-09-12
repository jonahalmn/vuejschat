<template>
    <div>
        <h1> Connectés </h1>
        <ul>
            <UserStatus 
            v-for="user in users"
            v-bind:user="user"
             />
        </ul>
    </div>
</template>





<script>
import Vuex from 'vuex'
import UserStatus from '@/components/UserStatus'

export default {
  name: 'UserStatusBar',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { UserStatus } ,
  computed: {
      ...Vuex.mapGetters(['users'])
  }
}
</script>