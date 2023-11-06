<template>
  <div class="flex items-center justify-center text-center">
    <Paginate 
      v-model="currentPage" 
      :totalPages="100" 
      :layout="'navigation'">
    </Paginate>
  </div>
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