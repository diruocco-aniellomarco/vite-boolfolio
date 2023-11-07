<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

import { store } from "../data/store";

export default {
  data() {
    return {
      title: "Dettagli Progetto",
      project: {},
    };
  },

  components: { ProjectCard },

  created() {
    axios
      .get(store.api.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        // console.log(response.data);
        this.project = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ this.$route.params.id }}</p>
    <ProjectCard :project="project" v-if="project" />
  </div>
</template>

<style lang="scss"></style>
