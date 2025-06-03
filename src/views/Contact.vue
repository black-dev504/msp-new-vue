<template>
  <section >
    <section class='grid justify-between grid-cols-1 gap-10 px-10 pt-16 pb-24 bg-white md:px-10 lg:px-25 md:grid-cols-2'>
        <div class='flex flex-col items-start text-left'>
            <p class='font-normal text-[16px] text-[#4265D2]'>Talk to us</p>
            <h1 class='font-heading text-6xl mt-2 mb-6 text-[#040815]'>Let’s Connect! We’re Here to Help.</h1>
            <p class='font-paragraph text-[18px] mb-8 text-[#596780]'>Got questions? Need support? Interested in learning more about how MSP can improve your school administration? Our team is ready to assist you!</p>
            <form action="">
                <input class='w-full mb-6 border-1 border-[#BBBFC3] rounded-[4px] bg-[#F7F9FA] py-[10px] px-3' type="text" placeholder='Your Name (Required)' required/>
                <input class='w-full mb-6 border-1 border-[#BBBFC3] rounded-[4px] bg-[#F7F9FA] py-[10px] px-3' type="email" placeholder='Your Email (Required)' required/>
                <input class='w-full mb-6 border-1 border-[#BBBFC3] rounded-[4px] bg-[#F7F9FA] py-[10px] px-3' type="text" placeholder='Your Phone Number (Required)' required/>    
                <input  class='w-full mb-6 border-1 border-[#BBBFC3] rounded-[4px] bg-[#F7F9FA] py-[10px] px-3' type="text" placeholder='Subject'/>
                <textarea class='w-full mb-6 border-1 border-[#BBBFC3] rounded-[4px] bg-[#F7F9FA] px-3' placeholder='Message' rows="5" required></textarea>
                <div>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" class="text-gray-500 text-[14px] ml-2">
                I agree to the Terms & Privacy Policy
                </label>
                </div>                

        <button class=' w-full primary-blue px-5 py-3 text-white bg-[#1C3FAA] rounded-[8px] mt-3 md:mt-6'>Send Message</button>
            </form>
        </div>
        <div class="rounded-[20px]" >
            <img class="h-full overflow-hidden w-full object-cover rounded-[20px]" src='/images/contactpic.png' alt="" />
        
        </div>
        </section>

        <section class='bg-[#F9F9F9] py-10 md:py-15 lg:py-24 '>
            <Ctabanner :head="bannerHead" :desc="bannerDesc" />
        </section>


</section> 
</template>

<script>
import Ctabanner from '@/components/Ctabanner.vue';
export default {
    name: 'Contact',
    components: {
        Ctabanner
    },
    data (){
        return{
            bannerHead: 'Stay Connected',
            bannerDesc: 'Follow us on [Social Media Links] for updates, insights, and customer success stories.'
        }
    }

}
</script>

<style>

</style>