<template>   
	<Transition :size="size" >
		<div v-if="show">
			<div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
			<div 
				@click.self="closeModal" 
				@keydown.esc="$emit('close')" 
				@keup.esc="$emit('close')"
			 	class="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
			>
				<div :class="box_size + ' relative p-4 w-full h-full'">
					<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div class="p-4 rounded-t flex justify-between items-center border-b border-gray-200 dark:border-gray-600">
							<slot name="header">
								<div class="flex items-center text-lg">{{ title }}</div>
								<button @click="closeModal" aria-label="close" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
									</svg>
								</button>
							</slot>
						</div>
						<div class="p-6">
							<slot name="body">
								<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
									Lorem ipsum
								</div>
							</slot>
						</div>
						<div class="p-6 rounded-b border-gray-200 border-t dark:border-gray-600">
							<slot name="footer">
								<div class="flex justify-between">
									<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  @click="closeModal()"> {{ btn_close_name }} </button>
								</div>                
							</slot>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</Transition>
</template>

<script>
export default {
	name:'Modal',
	props: {
		show: Boolean,
		modalName: String,
		title: 'Title',
		close: 'Close',
		size: String,
		notEscapable: false,
  	persistent: false,
	},
	data() {
		return {
			open: false,
			btn_close_name: '',
			box_size: 'md',
		}
	},
	watch: {
    show() {
			const body = document.querySelector("body");
      if (this.show === false) {
        body.style.overflow = "";
				window.removeEventListener('keydown', this.closeWithEsc);
      } else {
        body.style.overflow = "hidden";
				window.addEventListener('keydown', this.closeWithEsc);
      }
    }
  },
	methods: {
		classSize(){
			console.log(this.size);
			return 'max-w-2xl'

			if (this.size == null) {
					this.size = 'md'
			}                 
			// const modalSizeClasses = {
			//     xs: 'max-w-xs',
			//     sm: 'max-w-sm',
			//     md: 'max-w-md',
			//     lg: 'max-w-lg',
			//     xl: 'max-w-xl',
			//     '2xl': 'max-w-2xl',
			//     '3xl': 'max-w-3xl',
			//     '4xl': 'max-w-4xl',
			//     '5xl': 'max-w-5xl',
			//     '6xl': 'max-w-6xl',
			//     '7xl': 'max-w-7xl',
			// }  
			// return modalSizeClasses[this.size]
		}, 
		closeModal(){
			this.$emit('close')
		},
    closeWithEsc(e) {
      if (this.show && e.key === 'Escape') {
        if (!this.notEscapable && !this.persistent) 
					this.closeModal()
      }
    },	
	},    
	mounted() {
		// console.log(this.size);
		if (this.size == 'xs')  {this.box_size = 'max-w-xs'}
		if (this.size == 'sm')  {this.box_size = 'max-w-sm'}
		if (this.size == 'md')  {this.box_size = 'max-w-md'}
		if (this.size == 'lg')  {this.box_size = 'max-w-lg'}
		if (this.size == 'xl')  {this.box_size = 'max-w-xl'}
		if (this.size == '2xl') {this.box_size = 'max-w-2xl'}
		if (this.size == '3xl') {this.box_size = 'max-w-3xl'}
		if (this.size == '4xl') {this.box_size = 'max-w-4xl'}
		if (this.size == '5xl') {this.box_size = 'max-w-5xl'}
		if (this.size == '6xl') {this.box_size = 'max-w-6xl'}
		if (this.size == '7xl') {this.box_size = 'max-w-7xl'}

		if (this.close == null) {
			this.btn_close_name = 'Close'
		}else{
			this.btn_close_name = this.close
		}
	},
}
</script>