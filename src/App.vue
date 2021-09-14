<template>
  <div id="app">
    <Search placeholder="Search title..," buttonText="Search" @search="get" />
    <!-- <Header @listMovies="getListMovies" @listSeries="getListSeries" /> -->
    <section class="">
      <!-- <Main :listMovies="listMovies" :listSeries="listSeries" /> -->
    </section>
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
// import Main from "./components/Main.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    // Header,
    // Main,
    Search,
  },
  data() {
    return {
      listMovies: [],
      listSeries: [],
    };
  },
  methods: {
    getQuery(query) {
      console.log(query);
    },

    // getListMovies(listMovies) {
    //   this.listMovies = listMovies;
    // },
    // getListSeries(listSeries) {
    //   this.listSeries = listSeries;
    // },
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
