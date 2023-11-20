
<template>
<nav aria-label="Navigation" class="mb-2">
  <div class="inline-flex">
    <button disabled="" :class="classesExtreme(1)">
      Prev
    </button>
    <button disabled="" :class="classesPage(1)">1</button>
    <button :class="classesPage(2)">2</button>
    <button :class="classesPage(3)">3</button>
    <button :class="classesPage(4)">4</button>
    <button :class="classesPage(5)">5</button>
    <button :class="classesExtreme(2)">
      Next
    </button>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 2,
      extremePage: 1,
      isFirstPage: true,
      isLastPage: false,
    }
  },
  methods: {
    classesPage(page) {   
      if(page === this.currentPage){
        return [
          `flex items-center justify-center px-3 h-8 leading-tight `,
          `text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-white`,
          `border border-gray-300 dark:border-gray-700 border-solid`,
          `dark:hover:bg-gray-700 dark:hover:text-white hover:bg-blue-100 hover:text-blue-700 `,
        ];
      }else{
        return [
          `flex items-center justify-center px-3 h-8 leading-tight`,
          `text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400`,
          `border border-gray-300 dark:border-gray-700 border-solid`,
          `hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`,
        ];
      }
    },
    classesExtreme() {  
      if(this.isFirstPage || this.isLastPage){   
        return [
          `flex items-center justify-center first:rounded-l-md last:rounded-r-dm px-3 h-8 ml-0 leading-tight`,
          `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-solid`,
          `cursor-not-allowed`,
          `bg-gray-100 text-gray-700`,
          `dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:bg-gray-700 dark:text-white`,
        ];
      }else{
        return [
          `flex items-center justify-center first:rounded-l-md last:rounded-r-md px-3 h-8 ml-0 leading-tight`,
          `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-solid`,
          `bg-white text-gray-500`,
          `dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
        ];
      }
    },
  },
}
</script>
