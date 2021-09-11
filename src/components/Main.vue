<template>
  <div>
    <section>
      <h2 class="title-section my-4">list di movies</h2>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
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
      </div>
    </section>
    <section>
      <h2 class="title-section my-4">list series</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4">
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
    </section>
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

<style scoped lang="scss">
.title-section {
  font-size: 2rem;
  text-transform: uppercase;
  color: red;
}
</style>
