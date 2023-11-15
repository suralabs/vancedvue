<template>
  <div class="container mx-auto w-full h-screen">
    <div class="relative grid grid-cols-1 md:grid-cols-2 content-center items-center h-screen px-4 md:px-0">
      <div class="space-y-3">
        <h3 h3 class="relative text-2xl text-center md:text-left md:text-[1.7rem] lg:text-[2rem] font-semibold text-primary dark:text-white">VancedVue — части пользовательского интерфейса для VueJS.</h3>
        <p class="text-sm text-center md:text-left lg:text-base font-medium text-primary dark:text-white">Мы любим то, что мы делаем. Позвольте нам помочь вам заниматься тем, что вы любите.</p>
        <div class="flex items-center w-fit space-x-2 mx-auto md:mx-0">
          <button class=" btn__primary">Начать</button>
          <div class="flex items-center space-x-2">
            <a target="_blank" href="https://github.com/suralabs/vancedvue" class=" px-3 py-[0.60rem] relative bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-1 xl:grid-cols-2 items-center">
        <div class="-mt-16 hidden md:inline-flex">
          <div>
            <div class="p-5">
              <div class="animation1 flex items-center space-x-4">
                <div class="relative w-fit hover:scale-105 duration-200">
                  <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block">
                    <img class="hidden dark:block w-20 h-20 rounded-3xl hover:scale-110 duration-300" :src="foto12" alt="avatar">
                  </span>
                  <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block">
                    <img class="block dark:hidden w-20 h-20 rounded-3xl" :src="foto1" alt="avatar">
                  </span>
                  <p class="absolute bottom-2 text-white -right-1 w-5 h-5 flex items-center justify-center p-2 text-xs rounded-2xl bg-[#ff4757]">8</p>
                </div>
                <div class="flex flex-col space-y-1">
                  <h5 class="text-primary dark:text-white font-medium text-sm">Segoe cute</h5>
                  <small class="text-xs font-lighttext-primary dark:text-gray-400">Do you want to participate in our initiative?</small>
                  <span class="space-x-2">
                    <button class="py-1 px-3 rounded-lg text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5">Open</button>
                    <button class="py-1 px-3 rounded-lg bg-white shadow-xl dark:bg-primary text-[0.6rem] text-black duration-300 hover:-translate-y-1">Cancel</button>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <div>
                <div class="animation2 p-5">
                  <div class="relative hover:scale-105 duration-200">
                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block">
                      <img class="hidden dark:block rounded-r-3xl w-44 h-44" :src="foto13" alt="">
                    </span>
                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block">
                      <img class="block dark:hidden rounded-r-3xl w-44 h-44" :src="foto2" alt="">
                    </span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="absolute -top-2 -left-2 h-8 w-8 p-2 rounded-lg flex items-center justify-center bg-white shadow-lg dark:bg-primary text-[#ff4757] text-xl" height="1em" width="1em">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                    </svg>
                  </div>
                  <div class="flex items-center justify-between w-fit">
                    <div>
                      <h5 class="text-primary dark:text-white font-semibold text-sm">Vancedvue 1.0</h5>
                      <p class="text-xs text-primary font-medium dark:text-gray-400">Copy and paste</p>
                    </div>
                    <div class="flex items-center justify-center ml-7 hover:scale-105 duration-200">
                      <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block;height:30px;width:30px">
                        <img class="z-[3] rounded-full" objectfit="contain" width="30" height="30" :src="foto12" alt="avatars">
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="animation1 flex flex-col space-y-4">
                <button class=" p-2 text-white bg-[#ff4757] hover:drop-shadow-2xl hover:-translate-y-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                  </svg>
                </button>
                <button class=" p-2 text-white bg-green-500 hover:drop-shadow-2xl hover:-translate-y-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                  </svg>
                </button>
                <button class=" p-2 text-white bg-yellow-500 hover:drop-shadow-2xl hover:-translate-y-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xl" height="1em" width="1em">
                    <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"></path></g>
                  </svg>
                </button>
              </div>
              <div class="animation1 flex flex-col space-y-4">
                <button class=" p-2 text-white bg-purple-500 hover:drop-shadow-2xl hover:-translate-y-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em">
                    <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"></path>
                    <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"></path>
                  </svg>
                </button>
                <button class=" p-2 text-[#ff4757] bg-white hover:drop-shadow-2xl hover:-translate-y-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                  </svg>
                </button>
                <button class=" p-2 text-white bg-[#0081c2] hover:drop-shadow-2xl hover:-translate-y-1">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="animation1 m-5 w-fit flex items-center bg-gray-200 dark:bg-darkSecondary justify-between shadow-xl rounded-lg">
              <input class="px-2 p-2 w-[13rem] text-xs bg-transparent flex-grow outline-none focus:px-4 duration-300" type="text" placeholder="Search">
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-3xl text-white p-2 rounded-xl bg-[#1a5cff] hover:bg-[#0081c2] cursor-pointer duration-200" height="1em" width="1em">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="hidden xl:block">
          <div class="animation1 h-max p-2 border-2 border-green-400 bg-green-100 rounded-xl flex items-center justify-between hover:drop-shadow-xl">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-11 h-11 bg-green-500 rounded-2xl">
                <span class="flex items-center justify-center bg-white rounded-xl w-6 h-6">
                  <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-green-500" height="1em" width="1em">
                      <path fill="none" d="M0 0h24v24H0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div>
                <p class="text-primary text-black pl-4">A success toast</p>
              </div>
            </div>
            <div>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg text-primary mr-4 cursor-pointer" height="1em" width="1em">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div>
              <div class="animation2 my-5 p-4 bg-white dark:bg-darkSecondary shadow-xl hover:shadow duration-200 rounded-xl w-fit">
                <div class="relative hover:scale-105 duration-200">
                  <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block;height:160px;width:160px">
                    <img class="rounded-xl" width="160" height="160" :src="foto3" alt="card image">
                  </span>
                  <div class="absolute -bottom-3 left-4 flex items-center space-x-2">
                    <span class="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit group duration-200">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-sm text-red-500 group-hover:text-white" height="1em" width="1em">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                      </svg>
                    </span>
                    <span class="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit group duration-200 space-x-1">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-sm text-blue-500 group-hover:text-white" height="1em" width="1em">
                        <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM14 11v2h2v-2h-2zm-6 0v2h2v-2H8z"></path></g>
                      </svg>
                      <small class="text-blue-500 group-hover:text-white">12</small>
                    </span>
                  </div>
                </div>
                <div class="pt-3">
                  <h5 class="text-primary dark:text-white font-medium text-sm dark:text-black">Segoe cute</h5>
                  <small class="text-xs font-light text-primary dark:text-gray-400">Do you want to participate?</small>
                </div>
              </div>
              <div class="animation2 select-none">
                <div class="p-2 bg-white dark:bg-darkSecondary shadow-2xl rounded-xl flex items-center justify-between w-44 cursor-pointer text-black">
                  <small>DropDown</small>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="rotate-180 duration-200" height="1em" width="1em">
                    <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </div>
                <ul class="dropdown__ul opacity-0">
                  <li>😍</li>
                  <li>😋</li>
                  <li>😡</li>
                  <li>😎</li>
                  <li>😭</li>
                  <li>😩</li>
                </ul>
              </div>
            </div>
            <div class="space-y-5">
              <div class="animation1 group">
                <div class="flex items-center justify-center p-4 rounded-xl group-hover:scale-110 duration-200 bg-gray-100 dark:bg-teal-100 mx-auto">
                  <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block;height:70px;width:70px">
                    <img :src="vue_logo" width="70" height="70" alt="Tailwind css">
                  </span>
                </div>
                <div class="py-1">
                  <h5 class="text-primary text-center dark:text-white font-medium text-sm">Segoe cute</h5>
                  <small class="text-xs text-center font-light text-primary dark:text-gray-400">Do you want to participate?</small>
                </div>
              </div>
              <div class="flex space-x-1">
                <div class="animation1">
                  <span>
                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block;height:50px;width:50px">
                      <img class="bg-gray-200 cursor-pointer dark:bg-pink-200 rounded-full" objectfit="contain" width="50" height="50" :src="person1" alt="avatar 1">
                    </span>
                  </span>
                </div>
                <div class="animation1">
                  <span>
                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block;height:50px;width:50px">
                      <img class="bg-gray-200 cursor-pointer dark:bg-pink-200 rounded-full" objectfit="contain" width="50" height="50" :src="person2" alt="avatar 1">
                    </span>
                  </span>
                </div>
                <div class="animation1">
                  <span>
                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style="color:transparent;display:inline-block;height:50px;width:50px">
                      <img class="bg-gray-200 cursor-pointer dark:bg-pink-200 rounded-full" objectfit="contain" width="50" height="50" :src="person3" alt="avatar 1">
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import foto1 from "../assets/images/foto1.png";
import foto2 from "../assets/images/foto2.jpg";
import foto3 from "../assets/images/foto3.png";
import foto12 from "../assets/images/foto12.png";
import foto13 from "../assets/images/foto13.png";
import person1 from "../assets/images/avatar/person01.png";
import person2 from "../assets/images/avatar/person02.png";
import person3 from "../assets/images/avatar/person03.png";

import vue_logo from "../assets/images/vue-logo.png";

export default {
  name: 'MainPage',
  props: ['user'],
  data() {
    return {
      name: import.meta.env.VITE_APP_NAME,
      person1,
      person2,
      person3,
      foto1,
      foto2,
      foto3,
      foto12,
      foto13,
      vue_logo,

    }
  },
}
</script>

<style>
.animation1 {
    animation: animation1 3s linear infinite
}

@keyframes animation1 {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(10px)
    }

    to {
        transform: translateY(0)
    }
}

.animation2 {
    animation: animation2 4s linear infinite
}

@keyframes animation2 {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(10px)
    }

    to {
        transform: translateY(0)
    }
}

.lazy-load-image-background.blur {
    filter: blur(15px)
}

.lazy-load-image-background.blur.lazy-load-image-loaded {
    filter: blur(0);
    transition: filter .3s
}

.lazy-load-image-background.blur>img {
    opacity: 0
}

.lazy-load-image-background.blur.lazy-load-image-loaded>img {
    opacity: 1;
    transition: opacity .3s
}
</style>