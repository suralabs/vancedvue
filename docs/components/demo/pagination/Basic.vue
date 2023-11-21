<template>
    <v-pagination
      :total-items="totalItems"
      :current-page="currentPage"
      :per-page="perPage"
      @page-changed="updateHandler"
      :go-button="goButton"
      styled="centered"
    />    
</template>

<script>
export default {
  	data() {
		return {
			totalItems: 79,
      currentPage: 3,
      perPage: 7,
      goButton: false,
		}
	},
  methods: {
    updateHandler($event){
      this.currentPage = $event
    }
  }
}
</script>
