<template>
  <div>
    <header>
      <a href="">
        <img src="/images/logo.png" alt="Logo MSTere" id="hlogo"/>
      </a>
      <router-link to="/play">Jouer</router-link>
      <router-link to="/infos">Informations</router-link>
    </header>
    <div>
      <router-view></router-view>
    </div>
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
</style>
