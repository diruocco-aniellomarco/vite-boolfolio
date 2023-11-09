<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
  },

  methods: {
    coverView(cover) {
      if (cover) {
        return cover;
      } else {
        return "https://placehold.co/400";
      }
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img :src="coverView(project.cover_image)" class="card-img-top" alt="..." />

    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Link:</strong> <br />

          <a href="" class="text-truncate d-block" style="width: 250px">{{
            project.link
          }}</a>
        </li>
        <li class="list-group-item">
          <p class="card-text text-wrap text-truncate" style="height: 100px">
            <strong>Descrizione:</strong> <br />
            {{ project.description }}
          </p>
        </li>
        <li class="list-group-item">
          <p><strong>Tipo: </strong>{{ project.type.label }}</p>
        </li>
        <li class="list-group-item">
          <strong>Tecnologie: </strong>
          <span v-for="(tecnology, index) in project.tecnologies">
            {{ tecnology.name }}
            <span v-if="index + 1 < project.tecnologies.length">,</span>
          </span>
        </li>
      </ul>
      <div class="card-footer">
        <router-link
          class="btn btn-primary"
          :to="{
            name: 'project-detail',
            params: {
              id: project.id,
            },
          }"
          >dettagli</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
ul {
  list-style-type: none;
}
</style>
