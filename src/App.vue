<template>
  <div id="app">
    <Header @listMovies="getListMovies" @listSeries="getListSeries" />
    <section class="container">
      <Main :listMovies="listMovies" :listSeries="listSeries" />
    </section>
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
  background-color: black;
  height: 100vh;
  overflow-y: auto;
}
</style>
