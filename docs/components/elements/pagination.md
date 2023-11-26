<script>
export default {
  	data() {
		return {
			totalItems: 79,
      currentPage: 3,
      perPage: 7,
      goButton: false,
      goButton2: true,
      Label: false
		}
	},
  methods: {
    updateHandler($event){
      this.currentPage = $event
      // console.log($event)
    }
  }
}
</script>
# Pagination

## Examples

Easily add a pagination with the `v-pagination` component

<SContainer>
  <v-pagination
    :total-items="totalItems"
    :current-page="currentPage"
    :per-page="perPage"
    @page-changed="updateHandler"
    :go-button="goButton"
    styled="centered"
  />
</SContainer>

<<< @/.vitepress/components/pagination/SPagination.vue

## styled `simple`

<SContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="simple"
  />
</SContainer>

<<< @/.vitepress/components/pagination/SPaginationSimple.vue

## Custom `prev` and `next` buttons

### Icon 

<SContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
  >
    <template #prev>⬅️</template>
    <template #next>➡️</template>
  </v-pagination>
</SContainer>

<<< @/.vitepress/components/pagination/SPaginationIcon.vue

### Text

<SContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
  >
    <template #prev>Previous</template>
    <template #next>Next</template>
  </v-pagination>
</SContainer>

<<< @/.vitepress/components/pagination/SPaginationText.vue

## Size

<SContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
    size="xs"
  />
    <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
  />
    <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
    size="xl"
  />
</SContainer>

<<< @/.vitepress/components/pagination/SPaginationSize.vue

## Label

<SContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
    :Label="Label"
  />
</SContainer>

<<< @/.vitepress/components/pagination/SPaginationLabel.vue
