<template>
	<div class="rounded-xl bg-opacity-80 bg-white dark:bg-gray-800 z-0 text-sm overflow-auto my-5">
		<div class="flex items-center justify-center shadow-lg py-4 cursor-pointer">
			<span v-if="!show" @click="show = !show" class="flex items-center space-x-2">
				<svg stroke="currentColor" fill="none" stroke-width="2"
					viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em">
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
					<circle cx="12" cy="12" r="3"></circle>
				</svg> 
				<small >Show code</small>
			</span>
			<span v-if="show" @click="show = !show" class="flex items-center space-x-2">
				<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em">
					<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
					<line x1="1" y1="1" x2="23" y2="23"></line>
				</svg>
				<small >Hide code</small>
			</span>
		</div>
		<div v-if="show" class="relative overflow-scroll">
			<div class="text-xs md:text-sm xl:text-base px-0 py-4 lg:p-8 text-primary dark:text-white h-96">
				<slot /> 
			</div>
			<button class="bg-transparent hover:bg-gray-50 absolute text-xs md:text-sm top-4 flex items-center space-x-1 right-4 px-4 py-2.5 rounded-xl border border-gray-200 duration-200">
				<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
					<path stroke-linecap="round" stroke-linejoin="round"
						d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184">
					</path>
				</svg>
				<span>Copy</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
    return {
			show: false,
		}
	},
}
</script>