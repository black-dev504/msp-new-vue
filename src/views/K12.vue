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
import { K12details } from '@/components/data'
export default {
  name: 'K12',
  components: {
    Category,
  },
  data() {
    return {
      head: 'For K-12',
      description:
        'At Myskool Portal, we recognise that the foundation of lifelong learning begins in primary and secondary schools. Our K–12 module is thoughtfully designed to address the unique challenges K–12 education, offering an intuitive solution to manage everything from student enrollment and attendance to academic progress and parent-teacher communication.',
      heroimg: '/images/k12heroimg.png',
      infoDetails: K12details,
      bannerDetails: {
        head: 'k-12 Services',
        desc: 'Optimize school opeerations, enhance student engagement, and empower educators with seamless, integrated solutions.',
      },
    }
  },
}
</script>

<style></style>
