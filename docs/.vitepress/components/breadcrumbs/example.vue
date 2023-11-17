<template>
  <Breadcrumbs :items="items" />
</template>
<script setup>
import { ref } from 'vue';
import { Breadcrumbs } from 'vancedvue';

const items = ref([
  { text: 'Home', href: '#' },
  { text: 'Library', href: '#' },
  { text: 'Data', href: '#' },
]);
</script>
