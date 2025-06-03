<template>
  <Category
    key=""
    :head="head"
    :desc="description"
    :heroimg="heroimg"
    :infoDetails="infoDetails"
    :bannerDetails="bannerDetails"
  />
</template>

<script>
import Category from '@/components/Category.vue'
import { tertiaryDetails } from '@/components/data'
export default {
  name: 'Tertiary',
  components: {
    Category,
  },
  data() {
    return {
      head: 'For Tetiary',
      description:
        'Myskool Portal’s tertiary module is specifically crafted to meet the dynamic needs of colleges, universities, and vocational institutions. Designed for the complexities of higher education, oursolution streamlines academic management, enhances research tracking, and supports strategic decision-making.',
      heroimg: '/images/tertiaryheroimg.png',
      infoDetails: tertiaryDetails,
      bannerDetails: {
        head: 'Tertiary Education Solutions',
        desc: 'Unify academic, administrative, and financial processes to create a streamlined and data-driven institution.',
      },
    }
  },
}
</script>

<style></style>
