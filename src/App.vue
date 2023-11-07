<script>
import NavBarUi from "./components/ui/NavBarUi.vue";

export default {
  // data() {
  //   return {};
  // },
  components: { NavBarUi },
};
</script>

<template>
  <NavBarUi />
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss"></style>
