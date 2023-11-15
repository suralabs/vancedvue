<script>
export default {
    name: 'Footer',
    props: { 
      href: '',
      src: '',
      alt: '',
      name: '',
      imageClass: '',
      nameClass: '',
      aClass: '',      
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
  <div class="mb-6 md:mb-0">
    <a :href="href" class="flex items-center">
      <img :src="src" class="h-8 mr-3" :alt="alt" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ name }}</span>
    </a>
  </div>
</template>

<style>
@media (min-width: 640px){
  .sm\:justify-between {
      justify-content: space-between;
  }  
  .sm\:items-center {
      align-items: center;
  }  
  .sm\:flex {
    display: flex;
  }
}

</style>

