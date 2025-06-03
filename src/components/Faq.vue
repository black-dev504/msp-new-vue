<template>
  <section>
    <div className="max-w-[80%] mx-auto my-15 md:my-24 justify-center items-center md:px-4 lg:px-8">
      <div
        className="flex flex-col text-center md:text-left items-center w-full md:items-start mx-auto md:mx-0 md:w-[60%]"
      >
        <h1 className="text-gray-900  font-normal font-heading text-3xl md:text-5xl pt-3 pb-5">
          FAQs
        </h1>
        <p className="text-[#475467] font-paragraph text-xl font-normal ">
          Everything you need to know about the product and billing. Can’t find the answer you’re
          looking for? Please chat to our friendly team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-16">
        <div v-for="faq in details" :key="faq.head">
          <Faqcard :head="faq.head" :desc="faq.text" :img="faq.img" />
        </div>
      </div>
      <div
        className="rounded-2xl py-4 md:p-8 bg-gray-50 items-center flex flex-col md:flex-row justify-between mt-16"
      >
        <div className="flex flex-col text-center md:text-left items-left md:w-7/10 lg:w-8/10">
          <p className="font-bold text-xl text-[#101828]">Still have questions?</p>
          <p className="font-normal my-5 md:my-0 text-xl text-[#475467]">
            Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
        </div>
        <button
          className="px-5 py-3 rounded-[8px]  text-white font-paragraph font-semibold text-[16px] bg-primary"
        >
          Get in touch
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import faqData from '@/components/data'
import Faqcard from '@/components/Faqcard.vue'
export default {
  name: 'FAQ',
  components: {
    Faqcard,
  },
  data() {
    return {
      details: faqData,
    }
  },
}
</script>

<style></style>
