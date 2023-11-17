<template>
  <TimePicker v-model="time" :show-meridian="false" />
</template>

<script setup>
import { TimePicker } from 'vancedvue';
import { ref } from 'vue';

const time = ref(new Date());
</script>
