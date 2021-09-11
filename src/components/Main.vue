<template>
  <div class="container">
    <div
      v-for="(card, index) in allDataCards"
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
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  props: { allDataCards: Array },

  methods: {},
};
</script>

<style>
</style>
