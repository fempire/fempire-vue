<template>
<md-field md-clearable class="SpeakerSearch">
  <label>Search</label>
  <md-input v-model="queryStr" />
</md-field>
</template>

<script>
import Fuse from 'fuse.js';

export default {
  props: {
    speakers: {
      required: true,
      type: Array,
    },
  },

  data: () => ({
    fuse: null,

    options: {
      shouldSort: true,
      tokenize: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'languages',
        'location',
        'name',
        'topics',
        'twitter',
        'website',
      ],
    },

    queryStr: '',
  }),

  computed: {
    queryTrimmed() {
      return this.queryStr.trim();
    },
  },

  created() {
    this.fuse = new Fuse(this.speakers, this.options);
  },

  watch: {
    queryStr(newQuery) {
      let speakers;

      if (!newQuery) speakers = this.speakers;
      else speakers = this.fuse.search(this.queryTrimmed);

      this.$emit('filtered-speakers', speakers);
    },
  },
};
</script>
