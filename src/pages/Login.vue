<template>
    <div>
        <input type="text" v-model="pseudo">
        <router-link @click.native="createPseudo(pseudo)" :to="{ name: 'Chat', params: { pseudo: pseudo }}">Connexion</router-link>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      pseudo: 'Jonah'
    }
  },
  methods: {
      createPseudo: (pseudo) => { 
                document.cookie = 'pseudo=' + pseudo
            }
  }
}
</script>