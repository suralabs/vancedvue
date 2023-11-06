<template>
  <Paginate 
    v-model="currentPage" 
    :totalPages="100" 
    previousLabel="<<<" 
    nextLabel=">>>">
  </Paginate>
</template>

<script >
  import { ref } from "vue";
  export default {
    setup() {
        const currentPage = ref(2);
        return {
            currentPage,
        };
    },
};
</script>

<style scoped>

</style>