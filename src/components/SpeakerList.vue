<template>
<div class="SpeakerList">
  <SpeakerCard
    v-for="{ languages, location, name, topics, twitter, website } in speakers"
    :key="name"
    :languages="languages"
    :location="location"
    :name="name"
    :topics="topics"
    :twitter="twitter"
    :website="website"
  />
</div>
</template>

<script>
import SpeakerCard from './SpeakerCard';

export default {
  components: {
    SpeakerCard,
  },

  props: {
    speakers: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.SpeakerList {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeate(2, 1fr);
  grid-gap: 2vh 3vw;

  @media screen and (min-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

