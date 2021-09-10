<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <div class="d-flex">
        <input
          v-model.trim="userSearch"
          type="text"
          class="w-100"
          placeholder="Cerca o inizia una nuova chat..."
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userSearch: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>