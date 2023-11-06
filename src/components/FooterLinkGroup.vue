<script>
export default {
    name: 'Footer',
    props: { 
    },
    data() {
      return {
      }
    },
    methods: {
    },    
    async mounted () {
    },
};
</script>

<template>
  <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    <slot name="default"></slot>
  </ul>
</template>

