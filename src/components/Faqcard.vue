<template>
                  <div className='flex flex-col items-center md:items-start text-center md:text-left  w-full'>
                    <img :src='img' className='w-10 h-10' alt="" />
                    <h1 className='text-gray-900 text-center md:text-left font-bold font-heading text-xl mt-5 mb-2'>{{ head }}</h1>
                    <p className='text-[#475467] font-paragraph text-[16px] font-normal '>{{ desc }}</p>

                </div>
</template>

<script>
export default {
    name: 'FaqCard',
    props: ['img','head','desc']

}
</script>

<style>

</style>