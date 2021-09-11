<template>
  <div class="col">
    <div class="card text-white bg-dark">
      <img :src="baseUriPoster + Poster" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">Title original:{{ Titleoriginal }}</p>
        <p class="card-text">Title:{{ Title }}</p>
        <p class="card-text">Lenguage:{{ Lenguage }}</p>
        <p class="card-text">Vote:{{ Vote }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      baseUriPoster: "https://image.tmdb.org/t/p/w342",
    };
  },
  methods: {},
  props: {
    Titleoriginal: String,
    Title: String,
    Lenguage: String,
    Vote: Number,
    Poster: String,
  },
};
</script>


<style scoped lang="scss">
.col {
  .card {
    min-height: 650px;
  }
}
</style>



