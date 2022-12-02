<script setup>
import { ref, watch } from "vue";
import Game from "@/components/Game.vue";
let url = ref(window.location.pathname);
watch(url, (path) => {
  window.history.pushState("", "", url.value);
});

/**
 *
 * @param {Event} event
 */
function onHeaderClick(event) {
  event.preventDefault();
  if (!event.target.href) return;
  url.value = event.target.getAttribute('href');
}
</script>

<template>
  <div>
    <header>
      <a href="" @click="onHeaderClick" class="logolink">
        <img id="hlogo" src="/images/logo.png" alt="Logo MSTere" />
      </a>
      <a href="/play" @click="onHeaderClick">Jouer</a>
      <a href="/infos" @click="onHeaderClick">Informations</a>
    </header>

    <main v-if="url == '/'"></main>
    <main v-else-if="url.startsWith('/play')"><Game /></main>
    <main v-else-if="url == '/infos'"></main>
    <main v-else></main>
  </div>
</template>

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
#hlogo{
  height: 2em;
}

header a.logolink{
  padding: 0;
}
</style>
