<script>
import { useAttrs } from 'vue'

export default {
    name: 'Footer',
    props: {
      sticky: false,
      footerType: 'default',  
    },
    data() {
        return {
            class_name: null,  
            attrs : useAttrs(),  
        }
    },
    methods: {
      cx(){
        if (this.footerType == 'default' || this.footerType == null) {
          return 'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'
        }
        if (this.footerType == 'sitemap') {
          return 'bg-gray-800'
        }        
        if (this.footerType == 'logo') {
          return 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800'
        }        
        if (this.footerType == 'socialmedia') {
          return 'p-4 bg-white sm:p-6 dark:bg-gray-800'
        }        
            
      },  
    },    
    async mounted () {
    },
};
</script>

<template>
  <footer v-bind="$attrs" :class="cx()">
    <slot name="default"></slot>
  </footer>
</template>

<style scoped>
.last\:mr-0:last-child {
    margin-right: 0;
}
@media (min-width: 768px){
 .md\:mr-6 {
    margin-right: 1.5rem;
  } 
}

.mr-4 {
    margin-right: 1rem;
}

@media (min-width: 1024px){
  .lg\:my-8 {
      margin-top: 2rem;
      margin-bottom: 2rem;
  }  
}

</style>

