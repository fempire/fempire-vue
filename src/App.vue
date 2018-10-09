<template>
<div id="app">
  <md-toolbar>
      <img src="./assets/logo.png">
    <h1 class="md-title">Fempire Vue.js</h1>
  </md-toolbar>
  <div class="fempire-content">
    <router-view />
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
$toolbarHeight: 48px;

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.md-toolbar {
  height: $toolbarHeight;

  img {
    height: 45px;
    margin-right: 15px;
  }
}

.fempire-content {
  height: calc(100% - #{ $toolbarHeight });
  padding: 3vh 2vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
