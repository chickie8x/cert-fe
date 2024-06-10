<template>
  <div class="p-4 border border-main-red w-64 h-52 rounded-md">
    <img :src="cardData.img" alt="" class="h-full object-cover" />
  </div>
</template>

<script>
import { mockData } from '@/utils'
export default {
  name: 'StudentCard',

  props: {
    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  },

  setup() {
    return {
      mockData
    }
  }
}
</script>
