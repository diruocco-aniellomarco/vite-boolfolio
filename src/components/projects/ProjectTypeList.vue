<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: [],
      },
    };
  },

  props: {
    type_id: Number,
  },

  components: { ProjectCard },

  methods: {
    fetchProjectsType(
      uri = store.api.baseUrl + "project-type/" + this.type_id
    ) {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    console.log(store.api.baseUrl + "project-type/" + this.type_id);
    this.fetchProjectsType();
  },
};
</script>

<template>
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
            @click="fetchProjectsType(link.url)"
            href="#"
            v-html="link.label"
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss"></style>
