<script>
import ProjectList from "./components/projects/ProjectList.vue";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: null,
      },
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <!-- :projects="projects"
    :links="pagination.links"
    @pagination-view="fetchProjects" -->

  <ProjectList />
</template>

<style lang="scss"></style>
