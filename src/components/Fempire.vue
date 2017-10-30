<template>
  
  <speaker-list v-bind:speakers="speakers"></speaker-list>

</template>

<script>
import SPEAKERS from '../mock-speaker';
import SpeakerList from './SpeakerList';

export default {
  components: {
    // Add a reference to the TodoList component in the components property
    SpeakerList,
  },
  data() {
    return {
      speakers: SPEAKERS,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
