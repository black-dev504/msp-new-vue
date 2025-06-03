<template>
  <section class="px-5 pt-8 pb-4 mx-auto bg-black md:px-10 lg:py-16">
    <div class="flex items-center justify-between w-full pb-8 bg-black border-b border-b-white">
      <div class="grid gap-8">
        <img src="/icons/footerlogo.svg" alt="white-logo" />

        <ul class="flex flex-col gap-4 text-white lg:flex-row lg:items-center lg:gap-8">
          <router-link class="mr-4" :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'About' }">About</router-link>
          <router-link :to="{ name: 'K12' }">K-12</router-link>
          <router-link :to="{ name: 'Tertiary' }">Tertiary</router-link>

          <!-- <router-link class="mx-4" :to="{ name: 'Pricing' }">Pricing</router-link>  -->
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </ul>
      </div>

      <div class="grid gap-4 text-white">
        <h3>Get the app</h3>
        <img src="/icons/apple.svg" alt="app-store-badge" />
        <img src="/icons/android.svg" alt="play-store-badge" />
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center gap-4 pt-8 text-center bg-black lg:flex-row lg:justify-between"
    >
      <p class="text-white">
        Copyright © 2025. MySkool Portal by
        <span class="text-primary"> Krystal Digital Solutions.</span> All Rights Reserved.
      </p>

      <div class="flex items-center gap-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/company" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkdn.svg" alt="" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/youtube.svg" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
