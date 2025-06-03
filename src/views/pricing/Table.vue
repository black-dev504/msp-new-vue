<template>
  <div>
    <div class="bg-[#355DD80D] md:px-6 py-[18px] border-y-1 border-[#355DD8]">
      <div class="flex items-center justify-between w-full">
        <h1 class="font-heading text-[18px]">{{ head }}</h1>
        <button
          :class="[
            'transition-transform bg-white cursor-pointer rounded-[40px] p-1 duration-500',
            isToggled && 'rotate-[180deg]',
          ]"
          @click="handleToggle"
        >
          <img src="/icons/arrowicon.svg" alt="" />
        </button>
      </div>
    </div>

    <div v-if="isToggled">
      <div v-for="list in lists" :key="list.title" class="grid grid-cols-[40%_60%]">
        <div class="py-2 md:pl-6">
          <p class="text-[#596780] text-[18px]">{{ list.title }}</p>
        </div>
        <div class="py-2 md:pr-6">
          <div class="grid items-center grid-cols-3 gap-3 justify-items-center">
            <div v-for="mark in list.marks" :key="mark">
              <p class="text-black">{{ mark }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      isToggled: false,
    }
  },
  props: {
    lists: {
      type: Array,
    },
    head: {
      type: String,
    },
    marks: {
      type: Array,
    },
  },
  methods: {
    handleToggle() {
      this.isToggled = !this.isToggled
    },
  },
}
</script>

<style></style>
