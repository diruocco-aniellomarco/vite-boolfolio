<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

import { store } from "../data/store";

export default {
  data() {
    return {
      projects: [],
    };
  },

  created() {
    console.log(
      store.api.baseUrl + "project-type/" + this.$route.params.type_id
    );
  },
};
</script>

<template>
  <div class="container">
    <h2>Progetti per tipo</h2>
  </div>
</template>

<style lang="scss"></style>
