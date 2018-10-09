<template>
<md-card>
  <md-card-header>
    <h3>{{ name }}</h3>
  </md-card-header>
  <md-card-content>

    <div>
      <a :href="twitterUrl" target="_blank" class="twitter">{{ twitter }}</a>
    </div>

    <div v-if="website">
      <a v-bind:href="website" target="_blank">
        {{ website }}
      </a>
    </div>

    <div>
      Topics:
      <ul>
        <li v-for="topic in topics" :key="topic">
          {{ topic }}
        </li>
      </ul>
    </div>
    <div v-if="location">
      Location: {{ location }}
    </div>

    <div>
      Languages:
      <ul>
        <li v-for="language in languages" :key="language">
          {{ language }}
        </li>
      </ul>
    </div>
  </md-card-content>
</md-card>
</template>

<script>
export default {
  props: {
    languages: {
      required: false,
      type: Array,
    },

    location: {
      required: true,
      type: String,
    },

    name: {
      required: true,
      type: String,
    },

    topics: {
      required: false,
      type: Array,
    },

    twitter: {
      required: false,
      type: String,
    },

    website: {
      required: false,
      type: String,
    },
  },

  computed: {
    twitterUrl() {
      return `http://twitter.com/${this.twitter}`;
    },
  },
};
</script>


<style lang="scss" scoped>
.md-theme-default.md-card {
  width: 100%;
}

.md-card-header {
    background-color: #dedede;
    padding: 0px 16px;
}

.twitter {
  color: #00C6FF;
}
</style>
