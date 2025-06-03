<template>
  <section class="pt-10 bg-black testimonial md:pt-24">
    <div class="flex flex-col items-center justify-center px-5">
      <div class="badge-img max-w-45 mb-3 rounded-[16px] py-1 px-3 flex items-center bg-white/10">
        <div class="rounded-full w-[6px] h-[6px] bg-white mr-[6px]"></div>
        <h1 class="text-white text-[16px] font-medium">Benefits</h1>
      </div>
      <div class="mx-auto w-7/10">
        <h1 class="pt-5 text-3xl text-center text-white mb-18 md:text-5xl font-heading">
          We are dedicated to helping Schools like yours win, everyday and in every way.
        </h1>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex overflow-x-auto scrollbar-hidden h-[380px] w-full px-4">
        <div v-for="detail in reviewDetails" :key="detail.name">
          <Review
            :review="detail.review"
            :name="detail.name"
            :role="detail.role"
            profile="/icons/profile.svg"
          />
        </div>
      </div>

      <div class="flex overflow-x-auto scrollbar-hidden h-[380px] w-full px-4">
        <div v-for="detail in reviewDetails" :key="detail.name">
          <Review
            :review="detail.review"
            :name="detail.name"
            :role="detail.role"
            profile="/icons/profile.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Review from '@/components/Review.vue'
import { reviewDetails } from '@/components/data'
export default {
  name: 'testimonialSection',
  components: {
    Review,
  },
  data() {
    return {
      reviewDetails,
    }
  },

  Mounted() {
    let scrollAmount = 0

    scrollInterval = setInterval(() => {
      const container = scrollContainer.value
      if (!container) return

      scrollAmount += 1
      container.scrollLeft = scrollAmount

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0
        container.scrollLeft = 0
      }
    }, 30)
  },
}
</script>
