<script>
export default {
    name: 'Footer',
    props: { 
      year: '',
      copyrightMessage: 'All Rights Reserved.',
      by: '',
      href: '',
      aClass: '',
    },
    data() {
      return {
        class_name: null,
        footer_year: '',
        aClasses: ''
      }
    },
    methods: {
      cx(){    
        return 'block text-sm text-gray-500 sm:text-center dark:text-gray-400' 
      },
      byComponent(){
        if (this.href !== null) {
          return 'a'
        } else {
          return 'span'
        }
      }, 
    },    
    async mounted () {
      if (this.year == null || this.year == '') {
        this.footer_year = new Date().getFullYear()
      }else{
        this.footer_year = this.year
      }
      // this.footer_year = new Date().getFullYear()

      if (this.href !== null) {
        this.aClasses = 'hover:underline'
      } else {
        this.aClasses = 'ml-1'
      }
    },
};
</script>

<template>
  <span :class="cx()">
    &copy; {{ footer_year }}
    <component :is="byComponent()" :href="href" :class="aClasses">{{ by }}</component>
    {{ copyrightMessage }}
  </span>
</template>

