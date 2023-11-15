<template>
<span :class="classes()">
  <slot>

  </slot>
</span>

</template>

<script >
// import { sizeable } from "./mixins";
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
      // let roundedClass = this.shapes[this.shape];
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
        // `${this.sizes}`,
        // `${this.sizes[this.size]}`,
        ` text-xs font-medium me-2 px-2.5 py-0.5 rounded`,
        colors,
      ];
    },
		classes2(){
			if (this.class == null) {
				this.class_name = ''
			} else {
				this.class_name = this.class
			}

			if (this.color == 'alternative') {
				return this.class_name + ' font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700 text-sm px-4 py-2'
			}

			if (this.color == 'dark') {
				return this.class_name + ' text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gray-900 dark:hover:bg-gray-700 text-sm px-4 py-2'
			}
			if (this.color == 'light') {
				return this.class_name + ' text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700 hover:bg-gray-100 dark:hover:border-gray-600 text-sm px-4 py-2'
			}
			if (this.color == 'green') {
				return this.class_name + ' focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 text-sm px-4 py-2'
			}
			if (this.color == 'red') {
				return this.class_name + ' focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900 hover:bg-red-800 dark:hover:bg-red-700 text-sm px-4 py-2'
			}                                    
			if (this.color == 'yellow') {
				return this.class_name + ' focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900 hover:bg-yellow-500 text-sm px-4 py-2'
			}
			if (this.color == 'purple') {
				return this.class_name + ' focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900 hover:bg-purple-800 dark:hover:bg-purple-700 text-sm px-4 py-2'
			}                        
			if (this.color == 'pink') {
				return this.class_name + ' focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900 hover:bg-pink-800 dark:hover:bg-pink-700 text-sm px-4 py-2'
			} 

			if (this.color == 'purple_blue') {
				return this.class_name + ' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2';
			}
			if (this.color == 'cyan_blue') {
				return this.class_name + ' text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2';
			}
			if (this.color == 'green_blue') {
				return this.class_name + ' text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2';
			}						
			
			if (this.color == 'default' || this.color == null) {
				return this.class_name + ' px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'
			}
		},  
	},
};
</script>