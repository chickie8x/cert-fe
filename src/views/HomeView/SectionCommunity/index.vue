<template>
  <div
    class="h-[500px] bg-community bg-no-repeat bg-cover flex flex-col justify-center items-center"
  >
    <span
      class="block text-center text-main-red text-[32px] font-semibold uppercase bg-white px-4 py-1 rounded-md mb-8"
      >Cộng đồng CloudCert</span
    >
    <div class="flex w-[1260px] justify-center space-x-6">
      <div
        v-for="(item, idx) in data"
        :key="idx"
        class="w-[360px] h-[320px] bg-white shadow-equal cursor-pointer"
      >
        <div class="w-full h-3/5 overflow-hidden">
          <img :src="item.img" alt="" class="h-full object-fill" />
        </div>
        <div class="mt-4">
          <span class="block text-center font-semibold line-clamp-2">{{ item.title }}</span>
          <span class="block text-center text-gray-600 mt-2 line-clamp-2">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockData } from '@/utils'

export default {
  name: 'SectionCommunity',

  setup() {
    const data = mockData.community
    return {
      data
    }
  }
}
</script>
