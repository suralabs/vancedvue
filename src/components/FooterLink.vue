<script>
export default {
    name: 'Footer',
    props: { 
      href: '',
      aClass: '',
      component: 'a',      
    },
    data() {
      return {
        linkAttr: ''
      }
    },
    methods: {      
    },    
    async mounted () {
    },
};
</script>

<template>
  <li class="mr-4 md:mr-6 last:mr-0">
    <a :href="href" class="hover:underline">
      <slot />
    </a>
  </li>
</template>

