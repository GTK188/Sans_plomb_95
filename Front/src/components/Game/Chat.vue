<script setup>
  import { ref } from 'vue';
  import Message from "./Message.vue";
  let currentMsg = ref('');

  let props = defineProps(['id, changeid']);

  let chatMsg = ref([{
    author: "TestUser",
    message: "Hello World",
  },{
    message: "Le serveur te dit d'aller niquer ta mère",
    serverMessage: true
  }]);

  function sendMessage(){

  }
</script>

<template>
  <div id="chatVue">
    <ul v-for="msg in chatMsg">
      <Message :author="msg.author" :server-message="msg.serverMessage" >{{ msg.message }}</Message>
    </ul>
    <form @submit="sendMessage">
      <input v-model="currentMsg" placeholder="Saisir un message" />
      <button> <div class="sendLogo"></div> </button>
    </form>
  </div>
</template>

<style lang="scss">
#chatVue {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: stretch;


  ul {
    padding: 0;
  }

  form{
    display: flex;
    justify-content: space-between;
    width: 100%;
    input{
      width: calc( 100% - 3em );
      outline: none;
      border-bottom: solid 0.4em var(--important);
    }
    button{
      width: 2em;
      height: 2em;
    }
  }

  .sendLogo {
    width: 2em;
    height: 2em;
    background-color: var(--gft);
    -webkit-mask: url(/icons/send.svg) no-repeat center;
    mask: url(/icons/send.svg) no-repeat cover;
    -webkit-mask-size: 1em;
    mask-size: 1em;
  }

}
</style>
