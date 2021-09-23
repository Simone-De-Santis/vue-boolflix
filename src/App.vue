<template>
  <div id="app">
    <Search
      placeholder="Search title..,"
      buttonText="Search"
      @search="getQuery"
    />
    <Results :items="listMovies" id="film" title="Film" />
    <Results :items="listSeries" id="serie" title="Serie TV" />
    <section class=""></section>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Results from "./components/Results.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Search,
    Results,
  },
  data() {
    return {
      listMovies: [],
      listSeries: [],
      api: {
        baseUri: "https://api.themoviedb.org/3/",
        typeSearch: "search/movie",
        apiKey: "?api_key=7df8fb39dc7a1252ca6c3e09b990db4b",
      },
    };
  },
  methods: {
    getQuery(query) {
      if (!query) {
        this.listMovies = this.listSeries = [];
        return;
      }
      this.fetchApi(query, "search/movie", "listMovies");
      this.fetchApi(query, "search/tv", "listSeries");
    },
    fetchApi(query, endpoint, entity) {
      const params = {
        params: {
          query,
          api_key: "7df8fb39dc7a1252ca6c3e09b990db4b",
          language: "it-IT",
        },
      };
      axios
        .get(`${this.api.baseUri}${endpoint}`, params)
        .then((res) => {
          this[entity] = res.data.results;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  background-color: black;
  height: 100vh;
  overflow-y: auto;
}
</style>
