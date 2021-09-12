<template>
  <div class="col">
    <div class="card text-white bg-dark">
      <img :src="baseUriPoster + Poster" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">Title original:{{ Titleoriginal }}</p>
        <p class="card-text">Title:{{ Title }}</p>
        <p class="card-text">
          Lenguage:  {{ Lenguage }}  
          <span>
            <img
              :src="require('@/assets/img/flag/' +  getFlag(Lenguage) + '.png')"
              alt=""
              class="flag"
            />
          </span>
          <section class="star">
            <p v-html="getStar()"> </p>
          </section>
        </p>
        <p class="card-text">Vote : {{ getRounderVote(Vote) }} / 5 </p>
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
  },
  data() {
    return {
      baseUriPoster: "https://image.tmdb.org/t/p/w342",
      voteStar: '<i class="fas fa-star">',
      voteFormatter: "",
      lenguageFlag: "it",
    };
  },
  methods: {
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
  .card {
    min-height: 650px;
  }
  .flag {
    width: 50px;
  }
}
</style>



