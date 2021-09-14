<template>
  <div class="col">
    <div
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
      class="card text-white bg-dark"
    >
      <img :src="getUrlImage()" class="card-img-top" alt="..." />
      <!-- <img :src="baseUriPoster + Poster" class="card-img-top" alt="..." /> -->
      <div class="card-img-overlay my-overflow" :class="overDate">
        <p class="card-text">Title original : {{ Titleoriginal }}</p>
        <p class="card-text">Title : {{ Title }}</p>
        <p class="card-text">Overview : {{ Overview }}</p>
        <p>
          <img
            :src="require('@/assets/img/flag/' + getFlag(Lenguage) + '.png')"
            alt=""
            class="flag"
          />
        </p>
        <section class="star"><p v-html="getStar()"></p></section>
        <p class="card-text">Vote : {{ getRounderVote(Vote) }} / 5</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    Titleoriginal: String,
    Title: String,
    Lenguage: String,
    Vote: Number,
    Poster: String,
    Overview: String,
  },
  data() {
    return {
      baseUriPoster: "https://image.tmdb.org/t/p/w342",
      imgPoster: "",
      voteStar: '<i class="fas fa-star">',
      voteFormatter: "",
      lenguageFlag: "it",
      overDate: "d-none",
    };
  },
  methods: {
    getUrlImage() {
      if (this.Poster == null) {
        return (this.imgPoster =
          "https://www.altavod.com/assets/images/poster-placeholder.png");
      }
      return (this.imgPoster = this.baseUriPoster + this.Poster);
    },
    mouseover: function () {
      this.overDate = "d-block mybg-transparent ";
    },
    mouseleave: function () {
      this.overDate = "d-none";
    },
    getRounderVote(Vote) {
      return (this.voteFormatter = Math.ceil(Vote / 2));
    },
    getStar() {
      if (this.voteFormatter == 5) {
        return (this.voteStar =
          ' <i class="fas fa-star"> <i class="fas fa-star "> <i class="fas fa-star"> <i class="fas fa-star "> <i class="fas fa-star">');
      } else if (this.voteFormatter == 4) {
        return (this.voteStar =
          ' <i class="fas fa-star"> <i class="fas fa-star "> <i class="fas fa-star"> <i class="fas fa-star "> <i class="far fa-star">');
      } else if (this.voteFormatter == 3) {
        return (this.voteStar =
          ' <i class="fas fa-star"> <i class="fas fa-star "> <i class="fas fa-star"> <i class="far fa-star"> <i class="far fa-star">');
      } else if (this.voteFormatter == 2) {
        return (this.voteStar =
          ' <i class="fas fa-star"> <i class="fas fa-star "> <i class="far fa-star"> <i class="far fa-star"> <i class="far fa-star">');
      } else if (this.voteFormatter == 1) {
        return (this.voteStar =
          ' <i class="fas fa-star"> <i class="far fa-star"> <i class="far fa-star"> <i class="far fa-star"> <i class="far fa-star">');
      } else {
        return (this.voteStar =
          ' <i class="far fa-star">  <i class="far fa-star"> <i class="far fa-star"> <i class="far fa-star"> <i class="far fa-star">');
      }
    },
    getFlag(Lenguage) {
      // return (this.lenguageFlag = "it");
      if (Lenguage == "it") {
        return (this.lenguageFlag = "it");
      } else if (Lenguage == "en") {
        return (this.lenguageFlag = "en");
      } else {
        return (this.lenguageFlag = "not-flag");
      }
    },
  },
};
</script>


<style scoped lang="scss">
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



