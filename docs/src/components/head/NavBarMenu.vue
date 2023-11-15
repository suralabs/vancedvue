<template>
  <router-link to="/" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class=""><path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path></svg>
    </div>      
  </router-link>
  <router-link to="/"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class=""><path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path></svg>
    </div>      
  </router-link>
  <router-link :to="'/friends/' + user.id"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class=""><path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z"></path></svg>
    </div>      
  </router-link>
  <router-link to="/chat"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg class=""  fill="none" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    </div>      
  </router-link>
  <router-link to="/chat"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg class=""  width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  
        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </svg>
    </div>      
  </router-link>  

  <div class="flex-none items-stretch flex h-14 lg:hidden" @click="show = !show">
    <div class="flex text-blue-600 hover:text-black py-2 px-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
      <span class="inline-flex justify-center items-center w-6 h-6">
        <svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
          <path fill="currentColor" :d="show ? showOnSvg : showOffSvg"></path>
        </svg>
      </span>
    </div>
  </div>
  <div :class="show ? showOnList : showOffList">
    <slot name="menu">
   

      <div class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black lg:py-2 lg:px-3">
        <div class="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0"
             @click="menu1 = !menu1">
          <span class="px-2 transition-colors">Docs</span>
          <span class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
          </span>
        </div>
        <div :class="menu1 ? menu1On : menu1Off" @click="menu1 = !menu1" >
          <div v-for="item in menu">
            <router-link :to="item.link" class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
              <div class="flex items-center">
                <span class="px-2 transition-colors">{{ item.name }}</span>
              </div>
            </router-link>  
          </div>
      
        </div><!-- <hr class="hidden lg:block lg:my-0.5 dark:border-slate-700 border-t border-gray-100"> -->

      </div>

      <a class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center"
        href="https://github.com/suralabs/vancedvue" style="width: max-content;">
        <div class="flex items-center">
          <div class="px-2 transition-colors break-keep">Give a star</div>
          <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
            <svg height="14" viewBox="0 0 16 16" width="14" fill="#fcd706" class="inline-block">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
            </svg>
          </span>          
        </div>
      </a>      
      <div @click="theme"
        class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center">
        <div class="flex items-center">
          <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor" d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"></path>
            </svg>
          </span>
          <span class="px-2 transition-colors lg:hidden">{{ $t('header.light_dark') }}</span>
        </div>
      </div>      

    </slot>
  </div>
</template>

<script>
// import {authRefreshToken} from "@/api/user"

export default {
  name: 'NavBarMenu',
  props: ['user'],
  data() {
    return {
      access_token: null,

      show: false,
      showOnSvg: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
      showOffSvg: 'M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z',
      showOnList: 'max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800 block',
      showOffList: 'max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800 hidden',

      menu1: false,
      menu1On: 'text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700',
      menu1Off: 'text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700 lg:hidden',
      menu:[
        {
          name:'Button',
          link:'/docs/components/button',
        },
        {
          name:'Alert',
          link:'/docs/components/alert',
        }, 
        {
          name:'Avatar',
          link:'/docs/components/avatar',
        }, 
        {
          name:'Badge',
          link:'/docs/components/badge',
        }, 
        {
          name:'Pagination',
          link:'/docs/components/pagination',
        },                         
        {
          name:'Test',
          link:'/docs/components/test',
        },                  
      ],
    }
  },

  async mounted() {
    this.access_token = localStorage.getItem('token');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }    
  },
  methods: {
    theme(){
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'      
        // localStorage.setItem('theme', 'light');    
      } else {      
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')   

      } 
    },    
  },

};
</script>

<style>
.max-h-screen-menu {
  max-height: calc(100vh - 3.5rem);
  height: max-content;
}
</style>