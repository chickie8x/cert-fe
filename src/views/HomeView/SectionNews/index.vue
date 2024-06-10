<template>
  <div>
    <span class="text-[#013d7b] uppercase text-[32px] font-bold block text-center">tin tức</span>
    <div class="mt-8">
      <CarouselComponent :carouselType="'news'" />
    </div>
  </div>
</template>

<script>
import CarouselComponent from '@/components/kits/carousel/index.vue'

export default {
  name: 'SectionNews',

  components: {
    CarouselComponent
  }
}
</script>
