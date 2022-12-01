<script setup>
import { ref, watch } from "vue";

let url = ref(window.location.pathname);

watch(url, (path) => {
  window.history.pushState("", "", path);
});

/**
 *
 * @param {Event} event
 */
function onHeaderClick(event) {
  event.preventDefault();
  if (!event.target.href) return;
  url.value = event.target.href;
}
</script>

<template>
  <div>
    <header>
      <a href="" @click="onHeaderClick">
        <img src="" alt="Logo MSTere" />
      </a>
      <a href="/play" @click="onHeaderClick">Jouer</a>
      <a href="/infos" @click="onHeaderClick">Informations</a>
    </header>

    <main v-if="url == '/'"></main>
    <main v-else-if="url == '/play'">Game</main>
    <main v-else-if="url == '/infos'"></main>
    <main v-else></main>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$echo);
    this.$echo.private("testchannel").listen("Test", (e) => {
      console.log("test successful " + e);
    });

    console.log("res");
  },
};
</script>
<style scoped>
header {
  width: 100%;
  font-size: 2em;
  background-color: var(--important);
  color: var(--ft);
  display: flex;
  align-items: stretch;
}

header a {
  color: inherit;
  text-decoration: none;
  text-align: center;
  padding: 0.5em;
}

header a:hover {
  transition: 0.5s ease-out;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
