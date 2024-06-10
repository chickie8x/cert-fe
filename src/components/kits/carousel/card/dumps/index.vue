<template>
  <div
    class="rounded-md relative shadow-md shadow-blue-100/30"
    :class="[cardLocation === 'homepage' ? 'bg-white h-[376px] border border-main-red' : '']"
  >
    <div class="bg-main-red mt-6 p-4 text-white">
      <span class="font-bold block text-xl">{{ cardData.name }}</span>
      <span class="block text-sm">{{ cardData.desc }}</span>
    </div>

    <div class="mt-3 text-3xl font-bold text-main-red">
      <span>{{ formatCurrency(cardData.price) }}</span>
    </div>

    <div class="mt-6 flex flex-col items-center text-gray-600 space-y-2">
      <span>Ngày cập nhật: {{ cardData.updatedAt }}</span>
      <span>Tỉ lệ: {{ cardData.rate }}</span>
      <span>Hãng: {{ cardData.createdBy }}</span>
    </div>

    <div class="flex justify-center w-full absolute bottom-4 left-0">
      <button
        class="w-36 h-9 rounded-full bg-main-red text-white hover:bg-white hover:text-main-red hover:border border-main-red outline-none uppercase hover:shadow-md"
      >
        Xem ngay
      </button>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '@/utils'

export default {
  name: 'DumpCard',

  props: {
    cardLocation: {
      type: String,
      require: true,
      default: () => 'homepage'
    },

    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  },

  setup() {
    return {
      formatCurrency
    }
  }
}
</script>
