<template>
  <div class="w-96 h-96 shadow-equal relative">
    <div class="w-full h-1/2">
      <img :src="cardData.img" alt="" class="h-full w-full object-cover" />
    </div>
    <div class="px-2">
      <span class="text-main-red font-semibold mt-4 text-left mb-4 h-12 line-clamp-2">{{
        cardData.title
      }}</span>
      <span class="line-clamp-2 text-gray-600 text-left">{{ cardData.desc }}</span>
    </div>
    <router-link
      :to="'/'"
      class="absolute bottom-4 left-4 px-4 py-1 border-2 border-main-red rounded-full text-main-red hover:bg-main-red hover:text-white hover:shadow-md"
      >Đọc thêm →</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NewsCard',

  props: {
    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>
