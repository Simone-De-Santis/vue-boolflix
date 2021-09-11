<template>
  <div>
    <h1>list di movies</h1>
    <div class="container d-flex flex-wrap">
      <div
        v-for="(card, index) in listMovies"
        :key="index"
        class="card"
        style="width: 18rem"
      >
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Title original:{{ card.original_title }}</p>
          <p class="card-text">Title:{{ card.title }}</p>
          <p class="card-text">Lenguage:{{ card.original_language }}</p>
          <p class="card-text">Vote:{{ card.vote_average }}</p>
        </div>
      </div>
    </div>
    <h2>list series</h2>
    <div class="container d-flex flex-wrap">
      <div
        v-for="(card, index) in listSeries"
        :key="index"
        class="card"
        style="width: 18rem"
      >
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Title original:{{ card.original_name }}</p>
          <p class="card-text">Title:{{ card.name }}</p>
          <p class="card-text">Lenguage:{{ card.original_language }}</p>
          <p class="card-text">Vote:{{ card.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  props: { listMovies: Array, listSeries: Array },

  methods: {},
};
</script>

<style>
</style>
