<script setup>
  import { ref, defineProps } from 'vue';
  const props = defineProps(['author', 'serverMessage'])


</script>

<template>
  <li :class="`message ${serverMessage?'servMsg':'clientMsg'}`">
    <h1 v-if="!props.serverMessage">{{ props.author }}</h1>
    <p><slot /></p>
  </li>
</template>

<style lang="scss">
  .message{
    display: block;
    list-style: none;
    border: solid 0.3em var(--important);
    padding: 1em;
    margin: 0;

    h1{
      color: var(--important);
      margin: 0;
      font-size: 1em;
    }

    p{
      color: var(--gft);
      margin: 0;
    }

  }

  .servMsg{
    background-color: var(--important);
    font-size: 1.3em;
  }

</style>