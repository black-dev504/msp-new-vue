<template>
  <div>
    <section class="items-center px-5 pt-10 bg-white md:px-30 md:py-20">
      <div class="md:pb-14">
        <div
          class="flex flex-col items-center text-center max-w-[1024px] w-[75%] mx-auto justify-center"
        >
          <h1 class="text-4xl md:text-6xl mt-5 mb-6 font-heading text-[#040815] font-normal">
            {{ head }}
          </h1>
          <p class="text-[18px] md:px-10 text-[#596780] font-paragraph font-normal">
            {{ desc }}
          </p>
          <button
            class="primary-blue px-5 py-3 text-white bg-[#1C3FAA] rounded-[8px] mb-16 mt-7 md:mt-12"
          >
            Get started
          </button>
        </div>
        <img class="w-full" :src="heroimg" alt="heroimg" />
      </div>
    </section>

    <section class="px-5 md:px-20">
      <div class="md:px-10">
        <div class="flex flex-col items-center justify-center my-10 text-center md:mb-16">
          <h1 class="font-heading text-[#040815] text-4xl md:text-5xl mb-4">
            Preparing Students to Achieve Sucess
          </h1>
          <img src="/images/scribble.png" alt="" />
        </div>

        <div v-for="data in infoDetails" :key="data.heading" class="">
          <Info :head="data.head" :img="data.img" :attributes="data.attributes" :left="data.left" />
        </div>
      </div>
    </section>

    <section class="bg-[#F9F9F9] px-5 md:px-15 py-10 md:py-15 lg:py-24">
      <Ctabanner :head="bannerDetails.head" :desc="bannerDetails.desc" />
    </section>
    <Testimonial />
    <Faq />
  </div>
</template>

<script>
import Ctabanner from './Ctabanner.vue'
import Info from './Info.vue'
import Testimonial from './Testimonial.vue'
import Faq from './Faq.vue'

export default {
  name: 'Category',
  props: {
    head: {
      type: String,
    },
    heroimg: {
      type: String,
    },
    desc: {
      type: String,
    },
    infoDetails: {
      type: Array,
    },
    bannerDetails: {
      type: Object,
    },
  },
  components: {
    Info,
    Ctabanner,
    Faq,
    Testimonial,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
