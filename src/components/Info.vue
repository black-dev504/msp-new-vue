<template>
  <section>
    <div
      :class="[
        'flex flex-col lg:flex-row  justify-between gap-7 mb-16',
        left && 'lg:flex-row-reverse',
      ]"
    >
      <div class="flex flex-col items-start md:my-15 lg:my-24 text-start">
        <div class="flex flex-col justify-start">
          <h1 class="mb-2 text-3xl font-normal text-gray-900">{{ head }}</h1>
          <div class="h-[5px] w-[65%] bg-hero"></div>
        </div>

        <div class="flex flex-col pl-4 mt-8">
          <div v-for="attribute in attributes" :key="attribute.title" class="flex gap-2 mb-5">
            <div class="w-7 h-7 bg-[#4265D2]/5 flex items-center justify-center rounded-[14px]">
              <img class="object-cover" src="/icons/checkicon.svg" alt="" />
            </div>
            <p class="font-normal text-[18px] text-[#596780]">
              <span class="font-bold text-[18px]"> {{ attribute.title }}</span> –
              {{ attribute.body }}
            </p>
          </div>
        </div>
      </div>

      <div class="min-h-[570px] md:min-w-[500px] min-w-[400px]">
        <img class="object-cover overflow-hidden" :src="img" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'info',
  props: {
    head: {
      type: String,
    },
    img: {
      type: String,
    },
    attributes: {
      type: Array,
    },
    left: {
      type: Boolean,
    },
  },
}
</script>
