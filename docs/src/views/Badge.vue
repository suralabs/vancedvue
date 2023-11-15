<template>
	<div class="relative max-w-4xl mx-auto px-4 lg:px-0">
		<div>
			<div>
				<div class="hidden xl:block fixed z-50 top-[10rem] right-4 duration-300">
					<div class="flex flex-col">
						<h4 class="float-right ml-auto text-black font-semibold text-xs md:text-base dark:text-white">On this page
						</h4>
						<div class="flex flex-col text-right text-xs mt-1">
							<a href="#default" class="sidebar__link"><p>Default</p></a>
						</div>
					</div>
				</div>
			</div>
			<Preview anchor="default" name="Default" 
			description="The most commonly used button styles.">
			<v-badge>Default</v-badge>
			<v-badge color="dark">dark</v-badge>
			<v-badge color="green">Green</v-badge>
			<v-badge color="red">red</v-badge>
			<v-badge color="yellow">yellow</v-badge>
			<v-badge color="purple">purple</v-badge>
			<v-badge color="pink">pink</v-badge>
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
    }
  },
}
</script>

<style>
</style>