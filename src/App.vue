<template>
  <div class="w-full mx-auto overflow-hidden">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Home from './views/landing/Home.vue'
import Footer from './views/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
