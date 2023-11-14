<script>
import ProjectTypeList from "../components/projects/ProjectTypeList.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      type: {
        id: "",
        label: "",
      },
    };
  },
  components: { ProjectTypeList },

  created() {
    axios
      .get(store.api.baseUrl + "types/" + this.$route.params.type_id)
      .then((response) => {
        this.type = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <h2>
      Progetti per tipo: <span v-if="type.id">{{ type.label }}</span>
    </h2>
    <ProjectTypeList :type_id="type.id" v-if="type.id" />
  </div>
</template>

<style lang="scss"></style>
