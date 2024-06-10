<template>
  <div class="min-h-screen">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/kits/navbar/index.vue'
import Footer from '@/components/kits/footer/index.vue'

export default {
  components: {
    NavBar,
    Footer
  },

  setup() {}
}
</script>
