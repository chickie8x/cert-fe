<template>
  <div>
    <CarouselComponent :carouselType="'cert'" />
  </div>
</template>

<script>
import CarouselComponent from '@/components/kits/carousel/index.vue'

export default {
  name: 'SectionCert',

  components: {
    CarouselComponent
  }
}
</script>
