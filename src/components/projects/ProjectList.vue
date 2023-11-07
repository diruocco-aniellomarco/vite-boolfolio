<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      title: "Lista progetti",
      view_p: null,
      projects: [],
      pagination: {
        links: [],
      },
      // links: null,
    };
  },
  components: { ProjectCard },

  // props: {
  //   projects: Array,
  //   links: Array,
  // },

  methods: {
    fetchProjects(uri = store.api.baseUrl + "projects") {
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
  <h2 class="mt-3">{{ title }}</h2>

  <div class="row row-cols-4 g-4 my-3">
    <div class="col" v-for="project in projects">
      <ProjectCard :project="project" />
    </div>
  </div>

  <div class="row">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-for="link in pagination.links" class="page-item">
          <a
            class="page-link"
            @click="fetchProjects(link.url)"
            href="#"
            v-html="link.label"
          ></a>
          <!-- v-html="link.label" serve per interpretare l'html. Se lo stampassi nel classimo modo vedrei un codice e non le frecce -->
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss"></style>
