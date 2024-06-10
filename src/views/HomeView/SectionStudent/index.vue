<template>
  <div class="py-10 px-2">
    <span class="block text-center text-main-red font-semibold text-[32px] uppercase"
      >Hình ảnh về học viên</span
    >
    <div class="mt-10">
      <CarouselComponent :carouselType="'student'" />
    </div>
  </div>
</template>

<script>
import CarouselComponent from '@/components/kits/carousel/index.vue'
export default {
  name: 'SectionStudent',

  components: {
    CarouselComponent
  }
}
</script>
