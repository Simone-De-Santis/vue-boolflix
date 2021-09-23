<template>
  <nav class="navbar navbar-light bg-dark">
    <div class="container-fluid">
      <a id="my-navbar-brand" class="navbar-brand">Boolfix</a>
      <div class="d-flex">
        <input
          v-model.trim="userValue"
          @keyup.enter="emitSearch"
          type="text"
          class="w-100"
          :placeholder="placeholder"
        />
        <button
          @click="emitSearch"
          class="btn btn-outline-danger"
          type="submit"
        >
          {{ buttonText || "Search" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Search",
  props: ["placeholder", "buttonText"],
  data() {
    return {
      userValue: "",
    };
  },
  methods: {
    emitSearch() {
      this.$emit("search", this.userValue);
    },
  },
};
</script>

<style lang="scss" scoped>
#my-navbar-brand {
  color: #e50914;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 3rem;
}
</style>