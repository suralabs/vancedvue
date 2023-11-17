<template>
  <TimePicker v-model="time" />
</template>

<script setup>
import { TimePicker } from 'vancedvue';
import { ref } from 'vue';

const time = ref(new Date());
</script>
