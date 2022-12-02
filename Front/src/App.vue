<template>
  <div>
    <header>
      <a href="">
        <img src="" alt="Logo MSTere" />
      </a>
      <router-link to="/play">Jouer</router-link>
      <router-link to="/infos">Informations</router-link>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
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
