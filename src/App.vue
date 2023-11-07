<script>
import ProjectList from "./components/projects/ProjectList.vue";

export default {
  // data() {
  //   return {};
  // },

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
