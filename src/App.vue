<template>
  <div id="app">
    <Header @listMovies="getListMovies" @listSeries="getListSeries" />
    <Main :listMovies="listMovies" :listSeries="listSeries" />
    <h1>titolo originale arrivato al padre {{}}</h1>
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
      listMovies: [],
      listSeries: [],
    };
  },
  methods: {
    getListMovies(listMovies) {
      this.listMovies = listMovies;
    },
    getListSeries(listSeries) {
      this.listSeries = listSeries;
    },
  },
};
</script>

<style lang="scss">
#app {
  h1 {
    color: green;
    text-transform: uppercase;
  }
  h2 {
    color: red;
    text-transform: uppercase;
  }
}
</style>
