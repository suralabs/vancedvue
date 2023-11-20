<template>
  <div v-if="visible" :class="wrapperClasses()" role="alert">
    <div class="flex items-center">
      <slot v-if="icon != undefined || $slots.icon" name="icon">
        <v-icon name="info"/>
      </slot>
      <slot name="title" />
    </div>
    <slot name="default" :on-close-click="onCloseClick" />
    <slot name="close-icon" :on-close-click="onCloseClick">
      <button v-if="closable != undefined" type="button" :class="closeBtnClasses()" aria-label="Close" @click="onCloseClick">
        <span class="sr-only">Dismiss</span>
        <v-icon name="close"/>
      </button>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {             
      type: 'info',
      closable: false,
      icon: false,
      border: false,               
    },
    data() {
      return {
        visible: true,
      }
    },
    methods: {
      onCloseClick () {
        this.$emit('close')
        this.visible = false
      },
      wrapperClasses(){
        let alertTextClasses = {
          danger: 'text-red-800 dark:text-red-400',
          dark: 'text-gray-800 dark:text-gray-300',
          info: 'text-blue-800 dark:text-blue-400',
          success: 'text-green-800 dark:text-green-400',
          warning: 'text-yellow-800 dark:text-yellow-300',
        }
        const alertTypeClasses = {
          danger: 'bg-red-50',
          dark: 'bg-gray-50',
          info: 'bg-blue-50',
          success: 'bg-green-50',
          warning: 'bg-yellow-50',
        }
        let borderColor = {
          danger: 'border-red-500 dark:text-red-400',
          dark: 'border-gray-500 dark:text-gray-400',
          info: 'border-blue-500 dark:text-blue-400',
          success: 'border-green-500 dark:text-green-400',
          warning: 'border-yellow-500 dark:text-yellow-400',
        }

        let colors = {
          danger: [alertTextClasses.danger, alertTypeClasses.danger].join(' '),
          dark: [alertTextClasses.dark, alertTypeClasses.dark].join(' '),
          info: [alertTextClasses.info, alertTypeClasses.info].join(' '),
          success: [alertTextClasses.success, alertTypeClasses.success].join(' '),
          warning: [alertTextClasses.warning, alertTypeClasses.warning].join(' '),
        }
        return [
          'p-4 gap-3 text-sm dark:bg-gray-800 rounded-lg',
          colors[this.type],
          (this.icon != undefined || this.closable != undefined) && 'flex items-center',
          borderColor[this.type],
          this.border != undefined && 'border',
        ]
      },     
      closeBtnClasses(){
        const defaultCloseButtonClasses = 'ml-auto -mr-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700'
        let closeButtonClasses = {
          danger: 'text-red-500 dark:text-red-400 bg-red-50 hover:bg-red-200 focus:ring-red-400',
          dark: 'text-gray-500 dark:text-gray-300 bg-gray-50 hover:bg-gray-200 focus:ring-gray-400 dark:hover:text-white',
          info: 'text-blue-500 dark:text-blue-400 bg-blue-50 hover:bg-blue-200 focus:ring-blue-400',
          success: 'text-green-500 dark:text-green-400 bg-green-50 hover:bg-green-200 focus:ring-green-400',
          warning: 'text-yellow-500 dark:text-yellow-300 bg-yellow-50 hover:bg-yellow-200 focus:ring-yellow-400',
        }
        return [
          defaultCloseButtonClasses, 
          closeButtonClasses[this.type]
        ];
      }
    },

  }
</script>