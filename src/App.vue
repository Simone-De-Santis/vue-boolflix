<template>
  <div id="app">
    <Header @allDataCall="getAllDataCall" />
    <Main :allDataCards="allDataCall" />
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
      allDataCall: [],
    };
  },
  methods: {
    getAllDataCall(allDataCall) {
      this.allDataCall = allDataCall;
      console.log("app", this.allDataCall);
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
