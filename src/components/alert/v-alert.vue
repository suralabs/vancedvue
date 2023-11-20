<template>
  <div role="alert" :class="alertClass" v-if="show">

    <div class="flex">
      <slot name="icon">
        <svg class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </slot>    
    </div>
    <div class="ml-3">
      <slot />            
    </div>
    <button  v-if="dismissible" @click="closeAlert" type="button" class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
  </div>
</template>
  
  <script setup>
  import { computed, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    dismissible: { type: Boolean, default: false },
    duration: { type: Number, default: 0 },
    type: { type: String, default: 'info' },
  });
  
  const emit = defineEmits(['dismissed']);

  let timeout = 0;
  let show = true;

  const alertTypeClasses = {
    danger: 'flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
    dark: 'flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300',
    info:    'flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
    success: 'flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400',
    warning: 'flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
}
  const alertClass = computed(() => ({
    [`${alertTypeClasses[props.type]}`]: true,
    'alert-dismissible': props.dismissible,
  }))
  ;
  
  function closeAlert() {
    clearTimeout(timeout);
    emit('dismissed');
    show = false
  }
  
  onMounted(() => {
    if (props.duration > 0) {
      timeout = setTimeout(closeAlert, props.duration);
    }
  });
  
  onUnmounted(() => {
    clearTimeout(timeout);
  });
  </script>