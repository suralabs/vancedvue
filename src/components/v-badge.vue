<template>
<span :class="classes()">
  <slot>

  </slot>
</span>

</template>

<script >
export default {
	name: 'v-button',
	props: {
		class: {
			type: String,
			default: null
		}, 
             
		color: {
			type: String,
			default: null
		},   
	},
  // mixins: [sizeable],
	data() {
		return {
			class_name: {
				type: String,
				default: null
			}, 
		}
	},
	mounted() {

	},
	methods: {
    classes() {
      let colors;
      switch (this.color) {
      case 'default':
        colors = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
        break;
      case 'dark':
        colors = 'bg-gray-100 text-white-800 dark:bg-gray-900 dark:text-gray-300';
        break;
      case 'green':
        colors = 'bg-green-100 text-blue-800 dark:bg-green-900 dark:text-green-300';
        break;
      case 'red':
        colors = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
        break;
      case 'yellow':
        colors = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
        break;        
      case 'purple':
        colors = 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
        break; 
      case 'pink':
        colors = 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
        break;
      default:
        colors = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }

      return [
        ` text-xs font-medium me-2 px-2.5 py-0.5 rounded`,
        colors,
      ];
    },
	},
};
</script>