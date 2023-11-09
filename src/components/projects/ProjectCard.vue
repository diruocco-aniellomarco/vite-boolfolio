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
          <p class="card-text">
            {{ project.description }}
          </p>
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
          >Dettagli</router-link
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
