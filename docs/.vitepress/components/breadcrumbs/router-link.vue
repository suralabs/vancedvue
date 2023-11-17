<template>
  <Breadcrumbs :items="items" />
</template>
<script setup>
import { ref } from 'vue';
import { Breadcrumbs } from 'vancedvue';

const items = ref([
  { text: 'Home', to: '/', exact: true },
  { text: 'Breadcrumbs', to: '/breadcrumbs' },
]);
</script>
