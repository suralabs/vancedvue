<template>
  <v-pagination
    :total-items="totalItems"
    :current-page="currentPage"
    :per-page="perPage"
    :go-button="goButton"
    styled="centered"
    @page-changed="updateHandler"
  />
</template>

<script>
export default {
  data() {
    return {
      totalItems: 79,
      currentPage: 3,
      perPage: 7,
      goButton: false,
    };
  },
  methods: {
    updateHandler($event) {
      this.currentPage = $event;
    },
  },
};
</script>
