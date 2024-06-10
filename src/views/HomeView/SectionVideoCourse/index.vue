<template>
  <div>
    <span
      class="mx-auto block text-center text-[32px] text-white bg-main-red rounded-md uppercase font-semibold mb-6 w-fit px-8 py-2"
      >Khoá học video miễn phí</span
    >
    <div>
      <CarouselComponent :carouselType="'video'" />
    </div>
  </div>
</template>

<script>
import CarouselComponent from '@/components/kits/carousel/index.vue'

export default {
  name: 'SectionVideoCourse',

  components: {
    CarouselComponent
  }
}
</script>

<style></style>
