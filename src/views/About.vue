<template>
  <div>
    <section class="items-center px-10 py-10 bg-white md:px-20 md:pt-20">
      <div class="flex flex-col items-center text-center max-w-[1024px] mx-auto justify-center">
        <p class="font-paragraph text-[#4265D2] font-semibold">About us</p>
        <h1 class="text-4xl md:text-6xl mt-3 mb-6 font-heading text-[#040815] font-normal w-8/10">
          Empowering Schools With Smart Administration
        </h1>
        <p class="text-[18px] md:px-10 text-[#596780] font-paragraph font-normal">
          At Myskool Portal, we believe that excellence in education begins with innovation. Our
          platform is meticulously designed to streamline every aspect of school management,
          empowering educators, administrators, and parents to focus on what truly matters shaping
          the future.
        </p>
        <button class="primary-blue px-5 py-3 text-white bg-[#1C3FAA] rounded-[8px] mt-7 md:mt-12">
          Request a Demo
        </button>
      </div>
    </section>

    <section class="relative px-10 bg-white lg:pt-24 md:pt-15 md:px-15 lg:px-30">
      <div
        class="grid grid-cols-1 md:grid-cols-[45%_55%] justify-items-center items-center py-15 md:py-24 gap-x-16 justify-between"
      >
        <div class="items-center md:items-start">
          <h1
            class="relative pt-3 pb-5 text-2xl font-normal text-center text-gray-900 md:text-left font-heading md:text-4xl lg:text-5xl"
          >
            Our Journey
          </h1>
          <p
            class="text-[#596780] relative z-10 text-center md:text-left font-paragraph text-[18px] font-normal"
          >
            MySkool Portal was conceived by a dedicated team of education professionals and
            technology experts who recognized the need for a unified, efficient solution. Frustrated
            by outdated systems and endless paperwork, we set out to create a portal that transforms
            school administration into an intuitive, seamless experience.
          </p>

          <p class="mt-6 text-[#596780] text-center md:text-left text-[18px]">
            Today, our platform stands as a testament to our commitment to revolutionizing education
            management on a global scale.
          </p>
          <div class="flex items-center justify-center mt-7 md:mt-12 md:justify-start">
            <button class="primary-blue px-5 py-3 text-white bg-[#1C3FAA] rounded-[8px]">
              Request a Demo
            </button>
          </div>
        </div>
        <div class="flex flex-col mt-6 overflow-y-visible md:mt-0">
          <div class="grid items-baseline grid-cols-2 gap-4 mb-4 overflow-y-visible">
            <img src="/images/pic1.png" alt="" class="" />
            <img src="/images/pic2.png" alt="" class="" />
          </div>
          <div class="grid grid-cols-[60%_40%] gap-4 lg:gap-0 overflow-y-visible items-">
            <img src="/images/pic3.png" alt="" class="" />
            <img src="/images/pic4.png" alt="" class="" />
          </div>
        </div>
      </div>
    </section>

    <section class="md:py-24 py-15 bg-[#F7F9FA]">
      <div class="text-center max-w-[1200] mx-auto mb-10 md:mb-15 lg:mb-24">
        <h1 class="text-4xl font-normal">Why Choose MySkool Portal?</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[55%_45%] gap-0">
        <div
          class="flex flex-col items-start px-2 md:my-15 lg:my-24 md:mr-16 md:ml-10 lg:ml-30 text-start"
        >
          <h1 class="text-3xl font-normal text-gray-900">What We Offer</h1>
          <div class="flex flex-col pl-4 mt-8">
            <div class="flex gap-2 mb-5">
              <div class="w-7 h-7 bg-[#4265D2]/5 flex items-center justify-center rounded-[14px]">
                <img class="object-coveer" src="/icons/checkicon.svg" alt="" />
              </div>
              <p class="font-normal text-[18px] text-[#596780]">
                Efficiency: Automate administrative workflows for a smoother school experience.
              </p>
            </div>

            <div class="flex gap-2 mb-5">
              <div class="w-7 h-7 bg-[#4265D2]/5 flex items-center justify-center rounded-[14px]">
                <img class="object-coveer" src="/icons/checkicon.svg" alt="" />
              </div>
              <p class="font-normal text-[18px] text-[#596780]">
                Collaboration: Unite parents, teachers, students, and administrators in a seamless
                digital ecosystem to enhance learning and education.
              </p>
            </div>

            <div class="flex gap-2 mb-5">
              <div class="w-7 h-7 bg-[#4265D2]/5 flex items-center justify-center rounded-[14px]">
                <img class="object-coveer" src="/icons/checkicon.svg" alt="" />
              </div>
              <p class="font-normal text-[18px] text-[#596780]">
                Scalability: Designed for schools of all sizes, from small academies to large
                institutions.
              </p>
            </div>

            <div class="flex gap-2 mb-5">
              <div class="w-7 h-7 bg-[#4265D2]/5 flex items-center justify-center rounded-[14px]">
                <img class="object-coveer" src="/icons/checkicon.svg" alt="" />
              </div>
              <p class="font-normal text-[18px] text-[#596780]">
                Security & Compliance: Ensure data protection with industry-standard security
                protocols.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            class="object-contain w-full h-full overflow-hidden"
            src="/images/offerpic.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="items-center px-10 py-24 mx-auto bg-white md:px-30">
      <div class="grid items-center grid-cols-1 gap-24 md:grid-cols-2">
        <div
          class="items-center md:items-start flex flex-col text-center md:text-left max-w-[512px]"
        >
          <h1 class="text-3xl font-normal text-gray-900 font-heading">Explore Now</h1>
          <p class="md:my-8 my-5 font-paragraph text-[18px] font-normal font-[#596780]">
            Discover the Myskool Portal difference and become part of a community that is passionate
            about shaping the future of education.
          </p>
          <button class="primary-blue px-5 py-3 text-white bg-[#1C3FAA] rounded-[8px] mt-4 md:mt-7">
            Request a Demo
          </button>
        </div>

        <div class="">
          <img class="object-contain overflow-hidden" src="/images/explorepic.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
