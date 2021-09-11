<template>
  <div>
    <h1>list di movies</h1>
    <div class="container d-flex flex-wrap">
      <Card
        v-for="(card, index) in listMovies"
        :key="index"
        :Titleoriginal="card.original_title"
        :Title="card.title"
        :Lenguage="card.original_language"
        :Vote="card.vote_average"
        :Poster="card.poster_path"
      />
    </div>
    <h2>list series</h2>
    <div class="container d-flex flex-wrap">
      <Card
        v-for="(card, index) in listSeries"
        :key="index"
        :Titleoriginal="card.original_name"
        :Title="card.name"
        :Lenguage="card.original_language"
        :Vote="card.vote_average"
        :Poster="card.poster_path"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Main",
  components: {
    Card,
  },
  data() {
    return {};
  },
  props: { listMovies: Array, listSeries: Array },

  methods: {},
};
</script>

<style>
</style>
