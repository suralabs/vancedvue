<template>
    <Paginate 
        v-model="currentPage" 
        :totalPages="100">
    </Paginate>
</template>

<script>
  import { ref } from "vue";
  
export default {
    setup() {
        const currentPage = ref(1);
        return {
            currentPage,
        };
    },
};
</script>