<script>
// let showModal = false

export default {
  data() {
    return {
      showModal: false,
      size1: false,
      size2: false,
      size3: false,
      size4: false,
    }
  },
}
</script>
# Modal 

Use the modal component to show interactive dialogs 
and notifications to your website users 
available in multiple sizes, colors, and styles

The modal component can be used as an interactive dialog 
on top of the main content area of the website 
to show notifications and gather information 
using form elements from your website users.

## Examples

<DemoContainer>
  <v-button @click="showModal = true">Open</v-button>
  <Teleport to="body">
    <v-modal size="md" :show="showModal" title="Lorem ipsum" @onDismissed="showModal = false">
      <!-- <template #header>
        <div class="flex items-center text-lg"> {{ $t('language.language_selection') }} </div>
        <button @click="showModal = false" aria-label="close" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
        </button>
      </template> -->
      <template #body>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          Lorem ipsum
        </div>
      </template>
    </v-modal>
  </Teleport>  
</DemoContainer>

<<< @/components/demo/input/Basic.vue

## Size

You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

The default value is: `2xl`

<DemoContainer>
  <v-button @click="size1 = true">SM Modal</v-button>
  <v-button @click="size2 = true">MD Modal</v-button>
  <v-button @click="size3 = true">XL Modal</v-button>
  <v-button @click="size4 = true">5XL Modal</v-button>
  <Teleport to="body">
    <v-modal size="sm" :show="size1" title="Lorem ipsum" @onDismissed="size1 = false">
    </v-modal>
  </Teleport>  
   <Teleport to="body">
    <v-modal size="md" :show="size2" title="Lorem ipsum" @onDismissed="size2 = false">
    </v-modal>
  </Teleport>  
   <Teleport to="body">
    <v-modal size="xl" :show="size3" title="Lorem ipsum" @onDismissed="size3 = false">
    </v-modal>
  </Teleport>  
   <Teleport to="body">
    <v-modal size="5xl" :show="size4" title="Lorem ipsum" @onDismissed="size4 = false">
    </v-modal>
  </Teleport>  
  
</DemoContainer>

#### Props

#### Slots

#### Events

