<script setup>
import {useToast} from "vancedvue";

const toast = useToast()
</script>
<template>
  <s-button label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
</template>