<template>  
  <div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <header>
      <Navigation :user="user"/>
    </header>
    <RouterView :user="user"/>
    <footer>
      <Footer/>
    </footer>

  </div>
</template>

<script>
import Navigation from '@/components/head/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PublicLayout',
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      user: {
        id: 0,
        first_name: '',
        last_name: '',
        photo: '',
        is_connected: false,
        is_admin: false,
        access_token: '',
      },
      access_token: null,      
    }
  },
}
</script>