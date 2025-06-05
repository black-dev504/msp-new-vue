<template>
  <section class="py-24 bg-white">
    <div class="flex flex-col">
      <div
        class="flex flex-col px-10 md:px-30 mb-12 md:mb-16 items-center text-center justify-between max-w-[1000px] mx-auto"
      >
        <h1 class="mb-5 text-3xl font-normal text-gray-900 font-heading md:text-5xl md:mb-8">
          Designed with detail. Built to deliver.
        </h1>
        <p class="font-paragraph text-xl md:px-10 text-[#03071E] font-paragraph font-normal">
          MySkoolPortal is designed for efficiency, helping K-12 and tertiary schools—public or
          private—streamline operations and improve management.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1500px] w-[80%] mx-auto">
        <router-link :to="{ name: 'K12' }">
          <div class="group perspective-normal">
            <div
              class="flip-card-inner rounded-[40px] max-w-[700px] min-h-[500px] md:min-h-[550px] bg-[#E8EBF9] flex items-center justify-center text-center group-hover:rotate-y-180 relative"
            >
              <div
                class="flip-card-front absolute inset-0 flex items-center justify-center rounded-[40px]"
              >
                <h1 class="font-normal text-[50px] md:text-[90px] font-heading">K-12</h1>
              </div>
              <div
                class="flip-card-back text-white absolute inset-0 flex flex-col items-center justify-center rounded-[40px]"
              >
                <h1 class="text-6xl font-heading">K-12</h1>
                <p class="pt-5 text-lg font-heading">
                  This module is thoughtfully designed to address the unique challenges of k-12
                  education,offering an intuitive solution to manage everything from student
                  enrollment and attendance to academic progress and parent teacher interaction
                </p>
              </div>
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'Tertiary' }">
          <div class="group perspective-normal">
            <div
              class="relative group-hover:rotate-y-180 flip-card-inner rounded-[40px] max-w-[700px] h-7/10 min-h-[500px] md:min-h-[550px] font-heading bg-[#FDE7EC] items-center justify-center text-center flex"
            >
              <div
                class="absolute inset-0 flex items-center justify-center rounded-[40px] backface-hidden flip-card-front"
              >
                <h1 class="font-normal text-[50px] md:text-[90px]">Tertiary</h1>
              </div>

              <div
                class="absolute inset-0 flex flex-col items-center justify-center rounded-[40px] flip-card-back backface-hidden"
              >
                <h1 class="text-6xl font-heading">Tertiary</h1>
                <p class="pt-5 text-lg font-heading">
                  Designed for the complexities of higher education, our solution streamlines
                  academic management, enhances research tracking, and supports strategic decision
                  making.
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.perspective-normal {
  perspective: 1200px;
}
.flip-card-inner {
  transition: transform 1.9s;
  transform-style: preserve-3d;
  min-height: 500px;
}
.group:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  padding: 20px;
  width: 100%;
  height: 100%;
}
.flip-card-back {
  transform: rotateY(180deg);
  background: #1c3faa;
  color: white;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: start;
  line-height: 3;
}
</style>
