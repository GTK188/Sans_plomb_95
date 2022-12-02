<script setup>
    import { ref, defineProps } from 'vue';
    import ChatVue from './Game/Chat.vue';

    const props = defineProps(['id', 'changeid']);

    const gameStarted = ref(false);

    const copiedClass = ref("");


    function inviteCopy(){
        navigator.clipboard.writeText(window.location.href)
        .then(() => copiedClass.value = "copiedInvite")
        .then(setTimeout(() => copiedClass.value = "" , 3000));
    }
</script>

<template>
    <div class="flexGame">
        <section name="game">
            <ChatVue :id="props.id" :changeid="props.changeid" />
        </section>
        <nav>
            <h1>La partie n'a pas commencé</h1>
            <div id="invitelink">
                <button @click="inviteCopy()" :class="copiedClass">Invitez vos amis pour jouer</button>
            </div>
        </nav>
    </div>
</template>

<style lang="scss">

    .flexGame {
      display: flex;
      justify-content: center;


    section, nav {
      font-size: 1em;
      border-radius: 2em;
      background-color: var(--game);
      color: var(--gft);
      padding: 2em;
      margin: 1em;
    }

    section {
      width: 50%;
      height: 80vh;
    }

    nav {
      width: 25%;
    }

    nav h1 {
      font-size: 1.2em;
      text-align: center;
    }


    #invitelink {
      width: 100%;
      height: 5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #invitelink button {
      cursor: pointer;
      position: relative;
      color: inherit;
      padding: 0.15em;
      border: 0.3em solid var(--important);
      border-radius: 0.2em;
      background: none;
      animation: 0.5s ease-in infinite alternate important-scale-change;
    }


    #invitelink button:hover {
      transition: 0.5s ease;
      background-color: var(--important);
    }

    #invitelink button:after {
      position: absolute;
      content: 'Lien copié!';
      display: block;
      padding: 0.25em;
      border: 0.3em solid var(--important);
      border-radius: 0.2em;
      background: var(--important);
      top: 50%;
      left: 50%;
      transform: translate(-50%, 70%) scale(0);

    }

    #invitelink button.copiedInvite:after {
      transition: 0.5s ease;
      transform: translate(-50%, 70%) scale(1);
    }

    .copiedInvite {

    }

    .copiedInvite:after {

    }

    }

    @keyframes important-scale-change{
        0%{
            padding: 0.25em;
        }

        100%{
            padding: 0.45em;
        }
    }
</style>