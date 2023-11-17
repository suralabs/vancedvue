<template>
  <TimePicker v-model="time" readonly />
</template>

<script setup>
import { TimePicker } from 'vancedvue';
import { ref } from 'vue';

const time = ref(new Date());
</script>
