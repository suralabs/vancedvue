<template>
    <Paginate 
        v-model="currentPage" 
        :totalPages="100">
    </Paginate>
</template>

<script >
  import { ref } from "vue";
  export default {
    setup() {
        const currentPage = ref(1);
        const totalPage = ref(15);
        const maxPage = ref(6);
        return {
            currentPage,
        };
    },
};
</script>

<style scoped>

</style>