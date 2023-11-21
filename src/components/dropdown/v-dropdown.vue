<template>
<div class="inline-flex relative">
  <div class="inline-flex items-center" >
    <!-- <button class="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 text-sm px-4 py-2 inline-flex items-center" href="" data-v-e40b6242="">
      <span class="">
        Top
      </span>
      <div class="ml-2">
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        </svg>
      </div>
    </button> -->
    <v-button @click="showList">{{ text }}</v-button>
  </div>
  <div v-if="show" class="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700" :style="stylePositionList()">
    <slot>
      <p class="p-2"> Dropdown content here </p>
    </slot>
  </div>
</div>
</template>
  
<script >
export default {
  props: {             
    placement: {
      type: String,
      default: 'top'
    },     
    text: {
      type: String,
      default: 'Default'
    },                
  },
	data() {
		return {
			show: false,
		}
	},
  methods: {
    showList(){
      this.show = !this.show 
    },
    stylePositionList(){
      let positions = {
        'top': 'top: -140px',
        'left': 'right: 70px',
        'right': 'left: 80px',
        'bottom': 'right: -10px; top: 46px;',
      }
      return[
        positions[this.placement],
      ]
    }
  }
}
</script>