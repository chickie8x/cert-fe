<template>
  <div>
    <span class="block mx-auto w-fit text-main-red font-semibold uppercase text-[32px]"
      >Khoá học phổ biến</span
    >
    <div>
      <div class="flex mx-auto w-fit h-11 mt-4 border-2 border-main-red rounded-lg space-x-1">
        <button class="bg-main-red text-white px-4 text-xl uppercase rounded-md">
          Khoá học video
        </button>
        <button
          class="text-main-red hover:text-white hover:bg-main-red rounded-md px-4 text-xl uppercase"
        >
          Khoá học combo
        </button>
      </div>

      <div class="mt-4 bg-red-pattern py-4 relative">
        <span class="absolute top-0 left-0 block w-full h-full bg-white bg-opacity-90"></span>
        <CarouselComponent :carouselType="'popular'" />
      </div>

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
import CarouselComponent from '@/components/kits/carousel/index.vue'

export default {
  name: 'SectionPopularCourse',

  components: {
    CarouselComponent
  }
}
</script>
