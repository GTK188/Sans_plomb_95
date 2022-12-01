<script setup>
  import { ref } from 'vue';
  let currentMsg = ref('');

  function sendMessage(){

  }
</script>

<template>
  <div id="chatVue">
    <ul>

    </ul>
    <form @submit="sendMessage">
      <input v-model="currentMsg" placeholder="Saisir un message" />
      <button> <div class="sendLogo"></div> </button>
    </form>
  </div>
</template>

<style>

  ul{
    height: calc( 100% - 2em)
  }

  form

  .sendLogo {
    width: 1em;
    height: 1em;
    background-color: var(--gft);
    -webkit-mask: url(/icons/send.svg) no-repeat center;
    mask: url(/icons/send.svg) no-repeat cover;
    -webkit-mask-size: 1em;
    mask-size: 1em;
  }
</style>
