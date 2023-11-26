<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
    :Label="Label"
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
