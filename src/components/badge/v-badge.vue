<template>
  <span :class="classes()">
    <slot> </slot>
  </span>
</template>
<script>
export default {
  props: {
    class: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      class_name: {
        type: String,
        default: null,
      },
    };
  },
  mounted() {},
  methods: {
    classes() {
      let colors = {
        default:
          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        dark: 'bg-gray-100 text-white-800 dark:bg-gray-900 dark:text-gray-300',
        green:
          'bg-green-100 text-blue-800 dark:bg-green-900 dark:text-green-300',
        red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        yellow:
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        purple:
          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
        pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      };
      return [
        `text-xs font-medium me-2 px-2.5 py-0.5 rounded`,
        colors[this.color],
      ];
    },
  },
};
</script>
