<template>
<div id="app">
  <md-toolbar>
    <div class="navTitle">
      <img src="./assets/logo.png">
      <h1 class="md-title">Fempire Vue.js</h1>
    </div>

    <SpeakerSearch
      :speakers="speakers"
      @filtered-speakers="e => speakersFiltered = e"
    />
  </md-toolbar>

  <div class="fempire-content">
    <SpeakerList :speakers="speakersFiltered" />
  </div>
</div>
</template>

<script>
import speakers from './mock-speaker';
import SpeakerList from './components/SpeakerList';
import SpeakerSearch from './components/SpeakerSearch';

export default {
  name: 'app',

  components: {
    SpeakerList,
    SpeakerSearch,
  },

  data: () => ({
    speakers,
    speakersFiltered: speakers,
  }),
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $toolbarHeight;
  width: 100vw;

  .navTitle {
    display: flex;
    align-items: center;

    img {
      height: calc(0.8 * #{ $toolbarHeight });
      margin-right: 15px;
    }
  }

  .SpeakerSearch {
    width: calc(100vw / 3);
  }
}

.fempire-content {
  height: calc(100% - #{ $toolbarHeight });
  padding: 3vh 2vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
