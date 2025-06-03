<template>
  <div>
    <nav
      :class="[
        'sticky top-0 items-center md:px-30 p-5',
        route === '/' || route === '/insight' ? 'bg-hero' : 'bg-white',
      ]"
    >
      <div
        :class="[
          'bg-white items-center px-5 md:px-15 py-3 justify-between flex rounded-[100px]',
          route !== '/' && route !== '/insight'
            ? 'shadow-lg shadow-[#00000014] backdrop-blur-lg'
            : '',
        ]"
      >
        <img src="/images/logo.png" alt="logo" />
        <ul
          class="hidden lg:flex gap-6 paragrah-text text-[#03071E] font-meduim text-[16px] items-center"
        >
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'About' }">About</router-link>
          <router-link :to="{ name: 'K12' }">K-12</router-link>
          <router-link :to="{ name: 'Tertiary' }">Tertiary</router-link>
          <router-link :to="{ name: 'Pricing' }">Pricing</router-link>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </ul>
        <button class="hidden lg:flex primary-blue px-5 py-3 text-white bg-[#1C3FAA] rounded-[8px]">
          Request a Demo
        </button>
        <button class="cursor-pointer lg:hidden" @click="handleClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div v-if="isMenuOpen" class="px-4 py-2 text-white md:hidden bg-deep-blue">
        <ul class="flex flex-col space-y-2">
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'About' }">About</router-link>
          <router-link :to="{ name: 'K12' }">K-12</router-link>
          <router-link :to="{ name: 'Tertiary' }">Tertiary</router-link>
          <router-link :to="{ name: 'Pricing' }">Pricing</router-link>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      route: '',
    }
  },
  methods: {
    handleClick() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
  computed: {
    route() {
      return this.$route.path
    },
  },
}
</script>

<style></style>
