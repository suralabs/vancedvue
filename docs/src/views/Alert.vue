<template>
<div class="relative max-w-4xl mx-auto px-4 lg:px-0">
	<div>
		<div>
			<div class="hidden xl:block fixed z-50 top-[10rem] right-4 duration-300">
				<div class="flex flex-col">
					<h4 class="float-right ml-auto text-black font-semibold text-xs md:text-base dark:text-white">On this page</h4>
					<div class="flex flex-col text-right text-xs mt-1">
						<a href="#default" class="sidebar__link"><p>Default</p></a>
						<a href="#dismissing" class="sidebar__link"><p>Dismissing</p></a>
					</div>
				</div>
			</div>
		</div>
		<Preview anchor="default" name="Default" 
		description="The most commonly used button styles.">
			<v-alert >Info alert! Change a few things up and try submitting again.</v-alert>
			<v-alert type="danger">Info Danger! Change a few things up and try submitting again.</v-alert>
			<v-alert type="warning">Info Warning! Change a few things up and try submitting again.</v-alert>
			<v-alert type="dark">Info Dark! Change a few things up and try submitting again.</v-alert>
			<v-alert type="success">Info Success! Change a few things up and try submitting again.</v-alert>
		</Preview>

		<Preview anchor="dismissing " name="Dismissing" 
		description="Use the following alert elements that are also dismissible.">
			<div>
				<v-alert v-if="show_info" @dismissed="show_info = false" dismissible>Info alert! Change a few things up and try submitting again.</v-alert>
				<v-alert type="danger" v-if="show_danger" @dismissed="show_danger = false" dismissible>Info Danger! Change a few things up and try submitting again.</v-alert>
				<v-alert type="warning" v-if="show_warning" @dismissed="show_warning = false" dismissible>Info Warning! Change a few things up and try submitting again.</v-alert>
				<v-alert type="dark" v-if="show_dark" @dismissed="show_dark = false" dismissible>Info Dark! Change a few things up and try submitting again.</v-alert>
				<v-alert type="success" v-if="show_success" @dismissed="show_success = false" :duration="num"  dismissible>Info Success! Change a few things up and try submitting again.</v-alert>

			</div>
		</Preview>		
	</div>
</div>
</template>
<script>
import Code from '@/components/Code.vue'
import Preview from '@/components/Preview.vue'


export default {
  components: {
    Code,
		Preview,
  },
  data() {
    return {
			show_info: true,
			show_danger: true,
			show_warning: true,
			show_dark: true,
			show_success: true,
			num: 3000,
    }
  },
	methods: {
    // dismissed(){
		// 	this.show1 = !this.show1
    // },    
  },
}
</script>

<style>
</style>