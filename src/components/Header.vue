<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <div class="d-flex">
        <input
          v-model.trim="queryUserSearch"
          @keyup.enter="callAndFiler"
          type="text"
          class="w-100"
          placeholder="Cerca o inizia una nuova chat..."
        />
        <button
          @click="callAndFiler"
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
      allDataCall: [],
    };
  },
  methods: {
    callAndFiler() {
      axios
        .get(
          `
        ${this.baseUri}${this.typeSearch}${this.apiKey}&query=${this.queryUserSearch}
        `
        )
        .then((res) => {
          this.allDataCall = res.data.results;
          console.log("figlio", this.allDataCall[0].vote_average);
        });
      this.$emit("title", this.allDataCall[0].title);
      this.$emit("original_title", this.allDataCall[0].original_title);
      this.$emit("original_language", this.allDataCall[0].original_language);
      this.$emit("vote_average", this.allDataCall[0].vote_average);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>