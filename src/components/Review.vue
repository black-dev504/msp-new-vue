<template>
  <div
    className="p-[1px] md:m-4 m-2 rounded-[12px] bg-gradient-to-r from-[#94A0A8] w-[300px] md:w-[370px] h-[290px] to-[#3A3F42]"
  >
    <div
      className="md:p-8 p-4 details flex flex-col h-full w-full bg-black rounded-[12px] justify-between"
    >
      <p className="text-[#9BA1A6]">{{ review }}</p>
      <div className="flex items-center  ">
        <img className="max-w-12 max-h-12" :src="profile" alt="" />
        <div className="flex flex-col pl-4 mt-2  md:mt-0">
          <h1 className="font-semibold text-[1rem] text-[#F1F1F3]">{{ name }}</h1>
          <p className="text-[#F1F1F3] text-[14px] font-normal">{{ role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviewcomponent',
  props: ['review', 'role', 'name', 'profile'],
}
</script>
