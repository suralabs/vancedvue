import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import FireUI from 'vancedvue'


// import 'primevue/resources/themes/saga-blue/theme.css'       //theme
// import 'primevue/resources/primevue.min.css'                 //core css
// import 'primeicons/primeicons.css'
// import 'primeflex/primeflex.css'

import Layout from './Layout.vue'

import './custom.css'

export default {
  Layout: Layout,
  extends: DefaultTheme,
  // ...DefaultTheme,

  enhanceApp({ app }) {
    // app.use(PrimeVue)
    // app.use(router)
    app.use(FireUI)
    app.component('DemoContainer', DemoContainer)
  }
}
