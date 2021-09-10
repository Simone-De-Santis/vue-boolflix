<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img :src="poster" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">Title original:{{ original_title }}</p>
        <p class="card-text">Title:{{ title }}</p>
        <p class="card-text">Lenguage:{{ original_language }}</p>
        <p class="card-text">Vote:{{ vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    poster: String,
    original_title: String,
    original_language: String,
    vote_average: String,
    title: String,
    /*
"original_title": "Pinocchio",
"backdrop_path": "/1NQkxP7oe5iJHNb4ApqhlDFJ9dI.jpg",
"overview": "Lonely toymaker Geppetto has his wishes answered when the Blue Fairy arrives to bring his wooden puppet Pinocchio to life. Before becoming a real boy, however, Pinocchio must prove he's worthy as he sets off on an adventure with his whistling sidekick and conscience, Jiminy Cricket.",
"popularity": 76.387,
"poster_path": "/ynkEEi296ofs9kCfRWcaWxOWN1n.jpg",
"release_date": "1940-02-23",
"vote_average": 7.1,
"vote_count": 4551
"id": 10895,
 */
  },
};
</script>

<style>
</style>