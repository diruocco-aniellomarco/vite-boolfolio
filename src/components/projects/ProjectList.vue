<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      title: "Lista progetti",
    };
  },
  components: { ProjectCard },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="container">
    <h2 class="my-3">{{ title }}</h2>
    <div class="row row-cols-4 g-4">
      <div class="col" v-for="project in projects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
