<template>
    <div>
        <input type="text" v-model="pseudo">
        <router-link :to="{ name: 'Messages', params: { pseudo: pseudo }}">Connexion</router-link>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      pseudo: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>