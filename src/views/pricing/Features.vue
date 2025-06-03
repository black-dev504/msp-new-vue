<template>
  <section className=" bg-white md:px-20 px-10 md:pt-30 py-16 items-center">
    <div className="flex flex-col items-center mb-8">
      <h1 className="text-gray-900 font-heading text-4xl mb-8">Compare Features</h1>
      <p className="font-normal text-xl text-gray-600 ">
        No matter your school's needs, we have the perfect plan to support you!
      </p>
    </div>

    <div>
      <div
        className="rounded-[8px] grid grid-cols-[50%_50%] gap-2 p-1 w-full border-1 border-[#355DD880] mb-8"
      >
        <button className="py-2 text-[#03071E] text-[16px] font-paragraph  bg-white  rounded-[6px]">
          K-12
        </button>
        <button className="py-2 bg-[#F7F9FA] rounded-[6px] text-[16px] shadow-sm">Tertiary</button>
      </div>

      <div className="border-t-1 border-b-1 border-[#355DD8] bg-[#355DD80D] mb-8 py-10 md:px-6">
        <div className="grid grid-cols-[40%_60%]">
          <div className="flex flex-col">
            <h1 className="font-heading text-2xl">Modules</h1>
            <p className="text-[18px] font-normal text-gray-900">features</p>
          </div>
          <div className=" grid grid-cols-3 gap-3">
            <div className="flex flex-col text-center  justify-center">
              <h1 className="font-heading text-2xl">MSP_CORE</h1>
              <p className="text-[18px] font-normal text-gray-900">(N1,000 per student)</p>
            </div>

            <div className="flex flex-col text-center  justify-center">
              <h1 className="font-heading text-2xl">MSP_PLUS</h1>
              <p>(N2,000 per student)</p>
            </div>

            <div className="flex flex-col text-center  justify-center">
              <h1 className="font-heading text-2xl">MSP_ELITE</h1>
              <p>(N4,000 per student)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div v-for="detail in featureData" :key="detail.head" class="">
          <Table :head="detail.head" :lists="detail.lists" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Table from './Table.vue'
import { featureData } from '@/components/data'
export default {
  name: 'Features',
  components: {
    Table,
  },
  data() {
    return {
      featureData,
    }
  },
}
</script>

<style></style>
