<template>
  <div class="col">
    <div
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
      class="card text-white bg-dark"
    >
      <img :src="imagePath" class="card-img-top" alt="..." />
      <div class="card-img-overlay my-overflow" :class="overDate">
        <p class="card-text">
          Title original : {{ item.original_title || item.original_name }}
        </p>
        <p class="card-text">Title : {{ item.title || item.name }}</p>
        <p class="card-text">Overview : {{ item.overview }}</p>
        <p>
          <img
            v-if="flags.includes(item.original_language)"
            :src="getFlag(item.original_language)"
            :alt="item.original_language"
            class="flag"
          />
          <img
            v-else
            :src="getFlag('not-flag')"
            :alt="item.original_language"
            class="flag"
          />
        </p>
        <section class="star">
          <i
            v-for="n in 5"
            :key="n"
            :class="n <= vote ? 'fas' : 'far'"
            class="fa-star"
          >
          </i>
        </section>
        <p class="card-text">Popularity : {{ this.item.popularity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardss",
  props: ["item"],
  data() {
    return {
      flags: ["en", "it"],
      baseUriPoster: "https://image.tmdb.org/t/p/w342",
      overDate: "d-none",
    };
  },
  methods: {
    getFlag(lang) {
      return require(`@/assets/img/flag/${lang}.png`);
    },
    mouseover: function () {
      this.overDate = "d-block mybg-transparent ";
    },
    mouseleave: function () {
      this.overDate = "d-none";
    },
  },
  computed: {
    imagePath() {
      if (!this.item.poster_path)
        return "https://www.altavod.com/assets/images/poster-placeholder.png";
      else return this.baseUriPoster + this.item.poster_path;
    },
    vote() {
      return Math.ceil(this.item.vote_average / 2);
    },
  },
};
</script>

<style lang="scss">
.col {
  .flag {
    width: 50px;
  }
  .card-img-top {
    min-height: 456px;
  }
  .mybg-transparent {
    background-color: rgba(0, 0, 0, 0.774);
  }
  .my-overflow {
    overflow-y: auto;
  }
}
</style>