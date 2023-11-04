<script>
import ProjectList from "./components/projects/ProjectList.vue";

import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: null,
      },

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: { ProjectList },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <ProjectList
    :projects="projects"
    :links="pagination.links"
    @pagination-view="fetchProjects"
    class="mb-4"
  />
</template>

<style lang="scss"></style>
