<template>
    <div role="alert" :class="alertClass">
      <button
        v-if="dismissible"
        type="button"
        class="close"
        aria-label="Close"
        @click="closeAlert"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="flex">
            <slot name="icon">
                <svg class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            </slot>    
        </div>
        <div class="ml-3">
            <slot />            
        </div>

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
  
// console.log(props.type);

  let timeout = 0;

  const alertTypeClasses = {
    danger: 'p-4 text-sm bg-red-100 dark:bg-red-200 text-red-700 dark:text-red-800 rounded-lg flex',
    dark: 'p-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex',
    info: 'p-4 text-sm bg-blue-100 dark:bg-blue-200 text-blue-700 dark:text-blue-800 rounded-lg flex',
    success: 'p-4 text-sm bg-green-100 dark:bg-green-200 text-green-700 dark:text-green-800 rounded-lg flex',
    warning: 'p-4 text-sm bg-yellow-100 dark:bg-yellow-200 text-yellow-700 dark:text-yellow-800 rounded-lg flex',
}
  const alertClass = computed(() => ({
    [`${alertTypeClasses[props.type]}`]: true,
    'alert-dismissible': props.dismissible,
  }))
  ;
  
  function closeAlert() {
    clearTimeout(timeout);
    emit('dismissed');
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