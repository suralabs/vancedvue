<template>
  <DatePicker v-model="date" :week-starts-with="1" />
</template>
<script setup>
import { ref } from 'vue';
import { DatePicker } from 'vancedvue';

const date = ref(null);
</script>
