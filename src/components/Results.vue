<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <section :id="id" class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="item in items" :key="item.id">
        <Cardss :item="item" />
      </div>
    </section>
  </div>
</template>

<script>
import Cardss from "@/components/Cardss.vue";
export default {
  name: "Results",
  components: {
    Cardss,
  },
  props: ["id", "title", "items"],
};
</script>

<style>
</style>
