<template>
  <div id="app">
    <Header
      @title="getTitle"
      @original_title="getOriginalTitle"
      @original_language="getOriginalLanguage"
      @vote_average="getVoteAverage"
    />
    <Main
      :title="titleCard"
      :original_title="original_title"
      :original_language="original_language"
      :vote_average="vote_average"
    />
    <h1>titolo originale arrivato al padre {{ original_title }}</h1>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      titleCard: "",
      original_title: "",
      original_language: "",
      vote_average: "",
    };
  },
  methods: {
    getTitle(title) {
      this.titleCard = title;
    },
    getOriginalTitle(original_title) {
      this.original_title = original_title;
    },
    getOriginalLanguage(original_language) {
      this.original_language = original_language;
      console.log("padre lingua", this.original_language);
    },
    getVoteAverage(vote_average) {
      this.vote_average = vote_average;
      console.log("padre vote", this.vote_average);
    },
  },
};
</script>

<style lang="scss">
#app {
  h1 {
    color: green;
  }
}
</style>
