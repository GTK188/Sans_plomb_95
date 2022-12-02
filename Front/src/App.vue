<template>
  <div>
    <header>
      <a href="">
        <img src="" alt="Logo MSTere" />
      </a>
      <a href="/play">Jouer</a>
      <a href="/infos">Informations</a>
    </header>

    <div>
      <router-view></router-view>
    </div>
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
