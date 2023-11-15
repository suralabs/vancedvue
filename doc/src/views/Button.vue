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
							<a href="#color" class="sidebar__link"><p>Color variants</p></a>
							<a href="#gradient" class="sidebar__link"><p>Gradient</p></a>
							<a href="#group" class="sidebar__link"><p>Button group</p></a>
						</div>
					</div>
				</div>
			</div>
			<Preview anchor="default" name="Default" 
			description="The most commonly used button styles.">
				<v-button color="default">Default</v-button>
				<!-- <v-button >Default</v-button> -->
				<v-button color="default" disabled="disabled">Disabled</v-button>
			</Preview>
					
			<Code>
				<pre>
						<code class="language-jsx">
	&lt;button
		type="button"
		className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
		text-blue-600 hover:-translate-y-0.5 active:translate-y-0 shadow-blue-100 hover:shadow-blue-300
		bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white"&gt;
		Solid
	&lt;/button&gt;
	&lt;button
		type="button"
		className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
		text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
		hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600
		dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600
		dark:hover:bg-blue-600 dark:hover:text-white"&gt;
		Outline
	&lt;/button&gt;
	&lt;button
		type="button"
		className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
		text-blue-600 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-blue-300 duration-200
		bg-transparent hover:bg-blue-100 dark:bg-transparent dark:hover:bg-blue-100 text-blue-600"&gt;
		Ghost
	&lt;/button&gt;
	&lt;button
		type="button"
		className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
		text-blue-600 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-blue-300 duration-200
		bg-transparent bg-blue-100 hover:bg-blue-600 dark:bg-blue-100 dark:hover:bg-blue-600
		dark:hover:text-white text-blue-600 hover:text-white"&gt;
		Soft
	&lt;/button&gt;
	&lt;button
		type="button"
		className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
		text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
		border-2 border-blue-300 hover:border-blue-600 dark:border-gray-600 dark:hover:border-gray-500
		text-blue-600 dark:text-white"&gt;
		White
	&lt;/button&gt;
	&lt;button
		type="button"
		className="hover:underline text-xs md:text-sm rounded-xl py-2 px-4 md:py-3 md:px-6 bg-transparent text-blue-600
		active:text-blue-400"&gt;
		Link
	&lt;/button&gt;
				</code>
				</pre>
			</Code>
	
			<Preview anchor="color" name="Color variants" 
			description="Predefined solid color button styles.">
				<v-button color="alternative">Alternative</v-button>
				<v-button color="dark">Dark</v-button>
				<v-button color="light">Light</v-button>
				<v-button color="green">Green</v-button>
				<v-button color="red">Red</v-button>
				<v-button color="yellow">Yellow</v-button>
				<v-button color="purple">Purple</v-button>
				<v-button color="pink">Pink</v-button>
				<v-button color="default">Default</v-button>
			</Preview>
	
			<Preview anchor="gradient" name="Gradient" 
			description="Gradient button component">
				<v-button color="purple_blue">Purple to Blue</v-button>
				<v-button color="cyan_blue">Cyan to Blue</v-button>
				<v-button color="green_blue">Green to Blue</v-button>
				<!-- <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Pink</button> -->
				<!-- <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink to Orange</button> -->
				<!-- <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal to Lime</button> -->
				<!-- <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red to Yellow</button> -->
			</Preview>	
			
			<Preview anchor="group" name="Button group" 
			description="Group button component.">
				<div class="inline-flex rounded-md shadow-sm" role="group">
					<v-button group="left">Profile</v-button>
					<v-button group="true">Settings</v-button>
					<v-button group="right">Messages</v-button>
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
			}
		},
	}
	</script>
	
	<style>
	</style>