<template>
  <div class="w-[430px] h-[280px] relative flex justify-center items-center shadow-equal">
    <button
      class="w-20 h-20 bg-black hover:bg-white hover:bg-opacity-90 absolute left-[175px] top-[100px] rounded-full bg-opacity-60 flex justify-center items-center"
      @mouseover="changeColor"
      @mouseleave="revertColor"
    >
      <PlayBtn :bg="btnColor" class="scale-150 translate-x-[2px]" />
    </button>
    <img :src="cardData.img" alt="" class="h-full w-full object-cover" />
    <span
      class="absolute bottom-0 left-0 block w-full h-1/3 bg-gradient-to-t from-black to-transparent"
    ></span>
    <span class="absolute bottom-2 left-0 block text-center text-white w-full">{{
      cardData.title
    }}</span>
  </div>
</template>

<script>
import PlayBtn from '@/components/icons/play-btn.vue'
import { ref } from 'vue'

export default {
  name: 'CourseCard',

  components: {
    PlayBtn
  },

  props: {
    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  },

  setup() {
    const btnColor = ref('white')
    const changeColor = () => {
      btnColor.value = '#d2384f'
    }

    const revertColor = () => {
      btnColor.value = 'white'
    }

    return {
      btnColor,
      changeColor,
      revertColor
    }
  }
}
</script>
