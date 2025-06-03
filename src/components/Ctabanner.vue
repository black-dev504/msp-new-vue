<template>
  <div class="lg:w-[75%] mx-auto bg-[#4265D2] rounded-[20px] relative">
    <div class="items-center text-center py-17 md:px-8">
      <h1 class="font-heading font-normal text-white text-[32px]">{{ head }}</h1>
      <p class="text-[#E9D7FE] font-normal text-[18px] mt-4">{{ desc }}</p>
      <button
        class="primary-blue px-5 py-3 text-gray-700 border-gray-300 border-1 bg-white rounded-[500px] mt-10"
      >
        Request a Demo
      </button>
    </div>
    <div class="absolute top-0 right-0 h-full overflow-hidden">
      <img class="object-cover h-full overflow-hidden" src="/icons/stars.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ctabanner',
  props: ['head', 'desc'],
}
</script>

<style></style>
