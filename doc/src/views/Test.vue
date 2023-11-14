<template>
<Alert><b>Well done!</b> You successfully read this important alert message.</Alert>
</template>
<script>
import Icon from '@/ui/Icon.vue'
import Button from '@/ui/button/Button.vue'


export default {
  props: ['user'],
  components: {
    Icon,
    Button,
  },
  data() {
    return {
      name: import.meta.env.VITE_APP_NAME,
    }
  },
}
</script>

<style>
</style>