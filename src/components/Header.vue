<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <div class="d-flex">
        <input
          v-model.trim="queryUserSearch"
          @keyup.enter="StartSearch"
          type="text"
          class="w-100"
          placeholder="Cerca o inizia una nuova chat..."
        />
        <button
          @click="StartSearch"
          class="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      baseUri: "https://api.themoviedb.org/3/",
      typeSearch: "search/movie",
      apiKey: "?api_key=7df8fb39dc7a1252ca6c3e09b990db4b",
      queryUserSearch: "pinocchio",
      listMovies: [],
      listSeries: [],
    };
  },
  methods: {
    StartSearch() {
      axios
        .get(
          `${this.baseUri}${this.typeSearch}${this.apiKey}&query=${this.queryUserSearch}`
        )
        .then((res) => {
          this.listMovies = res.data.results;
          this.$emit("listMovies", this.listMovies);
        });
      axios
        .get(
          `${this.baseUri}search/tv${this.apiKey}&query=${this.queryUserSearch}`
        )
        .then((res) => {
          this.listSeries = res.data.results;
          this.$emit("listSeries", this.listSeries);
        });
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>