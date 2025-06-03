<template>
  <section>
    <Hero />
    <Details />
    <Testimonial />
    <Cta/>
    <Faq />
  </section>
</template>

<script>
import Hero from './Hero.vue';
import Details from './Details.vue';
import Testimonial from '../../components/Testimonial.vue';
import Cta from './Cta.vue';
import Faq from '../../components/Faq.vue';
export default {
    name:'Home',
    components:{
        Hero,Details,
        Testimonial,Cta,
        Faq
    }
}
</script>

