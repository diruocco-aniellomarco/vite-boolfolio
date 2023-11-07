<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Portfolio",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ProjectList />
  </div>
</template>

<style lang="scss"></style>
