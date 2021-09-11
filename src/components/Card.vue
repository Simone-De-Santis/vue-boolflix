<template>
  <div class="card" style="width: 18rem">
    <img src="" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">Title original:{{ Titleoriginal }}</p>
      <p class="card-text">Title:{{ Title }}</p>
      <p class="card-text">Lenguage:{{ Lenguage }}</p>
      <p class="card-text">Vote:{{ Vote }}</p>
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
  },
};
</script>


<style>
</style>



