<template>
  <div class="relative">
    <img v-if="img" alt="Avatar" :class="classes()" :src="img">
    <div v-if="initials" :class="classes()">
      <div class="font-medium text-gray-600 dark:text-gray-300">{{ initials }}</div>
    </div>
    <div v-if="!img && !initials" :class="classes()">
      <svg class="absolute w-auto h-auto text-gray-400 -bottom-1" fill="currentColor" viewBox="0 0 20 20">
        <path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
      </svg>
      <div class="font-medium text-gray-600 dark:text-gray-300"></div>
    </div>    
    <span v-if="status" :class="classesOnline()"></span>
  </div>
</template>
  
  <script>
  export default {
    name: 'v-button',
    props: {             
      img: {
        type: String,
        default: null
      }, 
      initials: {
        type: String,
        default: null
      },       
      size: {
        type: String,
        default: 'md'
      },       
      rounded : {
        type: Boolean,
        default: false
      }, 
      status: {
        type: String,
        default: null
      },    
      statusPosition: {
        type: String,
        default: 'top-right'
      },                   
    },
    data() {
      return {
        class: {
          type: String,
          default: ''
        }, 
      }
    },
    mounted() {
      this.class
    },
    methods: {
      classes() {
        const avatarSizeClasses = {
          xs: 'w-6 h-6',
          sm: 'w-8 h-8',
          md: 'w-10 h-10',
          lg: 'w-20 h-20',
          xl: 'w-36 h-36',
        }

        if(this.img){
          return [
            `${avatarSizeClasses[this.size]}`,
            this.rounded ? ' rounded-full' : ' rounded',
          ];
        }
        if(this.initials){
          return [
          `${avatarSizeClasses[this.size]}`,
            'inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600',
            this.rounded ? ' rounded-full' : ' rounded',
          ];
        }
        if(!this.initials && !this.img){
          return [
          `${avatarSizeClasses[this.size]}`,
            'inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600',
            this.rounded ? ' rounded-full' : ' rounded',
          ];
        }

      },
      classesOnline() {
        let online = 'absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center '+ 
        ' font-medium h-2 min-w-[0.5rem] text-[7px] p-0.5';
        let colors = {
          busy: 'text-white dark:text-gray-900 bg-yellow-500 dark:bg-yellow-400',
          online: 'text-white dark:text-gray-900 bg-green-500 dark:bg-green-400',
          away: 'text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400',
          offline: 'text-white dark:text-gray-900 bg-red-500 dark:bg-red-400',
        }
        let statusPosition = {
          'top-left': 'top-0 left-0',
          'top-right': 'top-0 right-0',
          'bottom-left': 'bottom-0 left-0',
          'bottom-right': 'bottom-0 right-0',
        }
        return [
          `${colors[this.status]}`,
          online,
          statusPosition[this.statusPosition],
        ];
      },      
    },
  };
  </script>