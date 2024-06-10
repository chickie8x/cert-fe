<template>
  <div class="bg-feature-section min-h-[400px] py-[50px] flex flex-col items-center">
    <div
      class="h-16 bg-[#222c33] flex justify-center items-center text-white uppercase font-bold text-[32px] rounded-md px-8"
    >
      <span>dump - voucher - tài liệu phổ biến</span>
    </div>
    <div class="max-w-[1490px] mx-auto">
      <div
        class="flex h-12 justify-center border-2 border-main-red rounded-lg w-fit mx-auto mt-8 mb-12 text-gray-600 text-[20px]"
      >
        <button class="h-full uppercase font-bold px-4 rounded-md bg-main-red text-white mr-1">
          dump
        </button>
        <button
          class="h-full font-thin uppercase hover:font-bold px-4 rounded-md hover:bg-main-red hover:text-white mr-1"
        >
          voucher
        </button>
        <button
          class="h-full font-thin uppercase hover:font-bold px-4 rounded-md hover:bg-main-red hover:text-white"
        >
          tài liệu - sách
        </button>
      </div>
      <CarouSelComponent :carouselType="'dump'" />

      <div class="flex justify-center mt-8">
        <router-link
          :to="'/'"
          class="flex justify-center items-center bg-white rounded-md w-44 h-12 border-2 border-main-red capitalize text-xl text-main-red outline-none hover:text-white hover:bg-main-red"
          >Xem thêm →</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import CarouSelComponent from '@/components/kits/carousel/index.vue'
import { Carousel } from 'vue3-carousel'

export default {
  name: 'SectionFeature',

  components: {
    CarouSelComponent
  },

  setup() {}
}
</script>
