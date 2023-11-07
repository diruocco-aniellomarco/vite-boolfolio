<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Lista progetti",
      view_p: null,
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },
  components: { ProjectCard },

  // props: {
  //   projects: Array,
  //   links: Array,
  // },

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
  <div class="container">
    <h2 class="mt-3">{{ title }}</h2>

    <div class="row row-cols-4 g-4 my-3">
      <div class="col" v-for="project in projects">
        <ProjectCard :project="project" />
      </div>

      <!-- <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li v-for="link in links" class="page-item">
            <a class="page-link"></a>
          </li>
        </ul>
      </nav> -->
    </div>
    <div class="row">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li v-for="link in links" class="page-item">
            <!-- @click="$emit('pagination-view', link.url)" -->
            <a class="page-link" :href="link.url">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss"></style>
