<template>
  <button :class="classes()" :type="type" :disabled="disabled">
    <div class="mr-2">
      <slot name="prefix"> </slot>
    </div>
    <slot> </slot>
    <div class="ml-2">
      <slot name="suffix"> </slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: ' ',
    },
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'md',
    },
    pill: {
      // type: String,
      default: 'false',
    },
  },
  methods: {
    classes() {
      let colors = {
        alternative:
          'text-gray-900 bg-white border-gray-200 ofocus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700',
        dark: 'text-white bg-gray-800 focus:ring-gray-300 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gray-900 dark:hover:bg-gray-700 ',
        light:
          'text-gray-900 bg-white border-gray-300 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700 hover:bg-gray-100 dark:hover:border-gray-600',
        green:
          'text-white bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-900 hover:bg-green-800 dark:hover:bg-green-700',
        red: 'text-white bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-900 hover:bg-red-800 dark:hover:bg-red-700',
        yellow:
          'text-white bg-yellow-700 focus:ring-yellow-300 dark:bg-yellow-600 dark:focus:ring-yellow-900 hover:bg-yellow-800 dark:hover:bg-yellow-700',
        purple:
          'text-white bg-purple-700 focus:ring-purple-300 dark:bg-purple-600 dark:focus:ring-purple-900 hover:bg-purple-800 dark:hover:bg-purple-700',
        pink: 'text-white bg-pink-700 focus:ring-pink-300 dark:bg-pink-600 dark:focus:ring-pink-900 hover:bg-pink-800 dark:hover:bg-pink-700',
        default:
          'text-white bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700',
        'cyan-blue':
          'text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:bg-gradient-to-bl',
        'green-blue':
          'text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-green-200 dark:focus:ring-green-800 hover:bg-gradient-to-bl',
        'pink-orange':
          'text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-pink-200 dark:focus:ring-pink-800 hover:bg-gradient-to-bl',
        'purple-blue':
          'text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-gradient-to-bl',
        'purple-pink':
          'text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-purple-200 dark:focus:ring-purple-800 hover:bg-gradient-to-bl',
        'red-yellow':
          'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-red-100 dark:focus:ring-red-400 hover:bg-gradient-to-bl',
        'teal-lime':
          'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 hover:bg-gradient-to-bl hover:from-teal-200 hover:to-lime-200',
      };
      let sizes = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-5 py-2.5 text-lg',
        xl: 'px-6 py-3 text-xl',
      };
      return [
        this.class,
        !this.pill ? 'rounded-full' : 'rounded-lg',
        sizes[this.size],
        colors[this.color],
        'focus:ring-4 font-medium focus:outline-none',
        'inline-flex items-center',
      ];
    },
  },
};
</script>
