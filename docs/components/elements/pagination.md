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
# Alert

> Display an alert element to draw attention.

## Examples

Use any of the available button types to quickly create a styled button.

<DemoContainer>
  <v-pagination
    :total-items="totalItems"
    :current-page="currentPage"
    :per-page="perPage"
    @page-changed="updateHandler"
    :go-button="goButton"
    styled="centered"
  />    
</DemoContainer>

<<< @/components/demo/pagination/Basic.vue

<DemoContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
  />    
</DemoContainer>

<DemoContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="simple"
  />    
</DemoContainer>

<DemoContainer>
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
</DemoContainer>

<DemoContainer>
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
</DemoContainer>

<DemoContainer>
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
</DemoContainer>

<DemoContainer>
  <v-pagination
    :totalItems="totalItems"
    :currentPage="currentPage"
    :perPage="perPage"
    @pageChanged="updateHandler"
    :goButton="goButton"
    styled="centered"
    :Label="Label"
  />    
</DemoContainer>

#### Props

#### Slots

#### Events

