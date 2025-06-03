<template>
  <section>
    <PricingHero />
    <Plans />
    <Features />

    <section className=" bg-[#F9F9F9] md:px-20 px-10 md:pt-30 py-16 items-center">
      <Ctabanner :head="bannerHead" :desc="bannerDesc" />
    </section>
  </section>
</template>

<script>
import PricingHero from './PricingHero.vue'
import Plans from './Plans.vue'
import Features from './Features.vue'
import Ctabanner from '@/components/Ctabanner.vue'
export default {
  name: 'Pricing',
  data() {
    return {
      bannerHead: 'Harness the power of MySkool Portal',
      bannerDesc:
        'Our innovative cloud based solution makes managing your teams more seamless than ever before, streamline your processes and take your business to the next level.',
    }
  },
  components: {
    PricingHero,
    Plans,
    Features,
    Ctabanner,
  },
}
</script>
