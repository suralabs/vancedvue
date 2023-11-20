import DefaultTheme from 'vitepress/theme'
// import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import DemoContainer2 from '../components/DemoContainer2.vue'
import * as VancedVue from 'vancedvue'
// console.log(VancedVue)

// import 'primevue/resources/themes/saga-blue/theme.css'       //theme
// import 'primevue/resources/primevue.min.css'                 //core css
// import 'primeicons/primeicons.css'
// import 'primeflex/primeflex.css'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.use(PrimeVue)
    app.use(VancedVue)
    app.component('DemoContainer', DemoContainer)
    app.component('DemoContainer2', DemoContainer2)
  }
}
