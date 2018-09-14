<template>
    <div class="login-container">
      <div class="login-content">
        <div class="intro">
            <h2>Introduis-toi</h2>
            <input type="text" v-model="pseudo" placeholder="... ton pseudo">
            <button @click="$emit('sendPseudo',pseudo)">GO ! </button>
          </div>
            <div class="hint-container">
              <p>BULB</p>
              <p>Truc de ouf sur l'application</p>
            </div>
        </div>
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

<style lang="css" scoped>
  .login-container{
    z-index: 99999;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .intro{
    background: #2e2e2e;
    padding: 50px 100px;
    border-radius: 6px;
  }

  .intro input{
    padding: 5px 15px;
    font-family: 'Roboto Mono';
    border: 0;
    border-radius: 2px;
  }

  .hint-container{
    font-family: 'Roboto Mono'
  }

  .intro button{
    background: #75faa2;
    border: 0;
    padding: 6px 25px;
    color: #000;
    font-weight: 700;
    border-radius: 5px;
  }

  .login-content{
    border-radius: 10px;
    background: #1d1d1d;
  }

  .hint-container{
    padding: 50px 100px;
    background: #1d1d1d;
    border-radius: 6px;
  }

  .login-content h2{
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 20px;
  }
</style>