<template>
  <DatePicker v-model="date" :today-btn="false" :clear-btn="false" />
</template>
<script setup>
import { ref } from 'vue';
import { DatePicker } from 'vancedvue';

const date = ref(null);
</script>
