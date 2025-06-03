<template>
  <section className=" hero bg-[#F7F9FA] md:px-20 px-10 md:pt-30 py-16 items-center">
    <div className="flex flex-col w-full items-center ">
      <h1 className="text-gray-900 font-heading text-4xl mb-8">
        Pay for What You Need—Nothing More.
      </h1>
      <div
        className="rounded-[8px] grid grid-cols-[50%_50%] gap-2 p-1 w-full border-1 border-[#355DD880] "
      >
        <button
          className="py-2 text-[#03071E] text-[16px] font-paragraph  bg-white shadow-sm rounded-[6px]"
        >
          K-12
        </button>
        <button className="py-2 rounded-[6px]">Tertiary</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 w-full">
        <div v-for="data in plansData" :key="data.head" class="">
          <Plan :head="data.head" :desc="data.desc" :attributes="data.attributes" />
        </div>
      </div>

      <button
        className="border-1 font-paragraph font-semibold text-[16px] rounded-[8px] border-[#4265D2] px-5 py-3"
      >
        See more
      </button>
    </div>
  </section>
</template>

<script>
import Plan from './Plan.vue'
import { plansData } from '@/components/data'
export default {
  name: 'Plans',
  components: {
    Plan,
  },
  data() {
    return {
      plansData,
    }
  },
}
</script>

<style></style>
