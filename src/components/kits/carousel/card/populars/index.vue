<template>
  <div class="w-96 h-60 relative rounded-lg shadow-sm cursor-pointer hover:shadow-lg">
    <span class="block absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full"
      >Miễn phí</span
    >
    <img :src="cardData.img" alt="" class="w-full h-full object-cover rounded-md" />
    <span class="block w-fit absolute bottom-2 left-2 text-white z-10">{{ cardData.title }}</span>
    <span
      class="absolute bottom-0 left-0 block w-full h-1/3 bg-gradient-to-t from-black to-transparent z-0 rounded-md"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'PopularCard',

  props: {
    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>
