<template>
    <div :class="{white: isWhite}" class="main-div">
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
      ...Vuex.mapGetters(['users', 'isWhite'])
  }
}
</script>

<style lang="css" scoped>
    .main-div{
        width: 30vw;
        background: #141414;
        height: 100vh;
        display: flex;
        flex-direction: column;

    }

    .white.main-div{
        background: #eaeaea;
    }

    .main-div ul{
        overflow: scroll;
    }

    h1{
        padding: 20px;
        text-align: left;
    }

    .white h1{
        color: #000;
    }
    
</style>