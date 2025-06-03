<template>
  <section>
    <PricingHero />
    <Plans />
  </section>
</template>

<script>
import PricingHero from './PricingHero.vue'
import Plans from './Plans.vue'
export default {
  name: 'Pricing',
  components: {
    PricingHero,
    Plans,
  },
}
</script>
