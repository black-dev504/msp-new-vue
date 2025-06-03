<template>
  <div className="rounded-[20px] p-10 bg-white flex flex-col items-start min-h-[500px]">
    <h1 className=" font-heading text-3xl mb-4">{{ head }}</h1>
    <p className="font-paragraph text-[20px]">{{ desc }}</p>

    <div className="flex flex-col pl-4 mt-8">
      <div v-for="attribute in attributes" :key="attribute.head" class="flex gap-2 mb-5">
        <div class="w-7 h-7 bg-[#4265D2]/5 flex items-center justify-center rounded-[14px]">
          <img class="object-cover" src="/icons/checkicon.svg" alt="" />
        </div>
        <p class="font-normal text-[18px] text-[#596780]">
          {{ attribute }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  props: {
    attributes: {
      type: Array,
    },
    head: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
}
</script>

<style></style>
