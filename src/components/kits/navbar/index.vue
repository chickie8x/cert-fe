<template>
  <div class="w-full shadow-b">
    <div
      class="flex justify-between h-10 items-center bg-[#F1F1F1] px-[7%] text-[#013d7b] border-b border-[#EEE]"
    >
      <div class="overflow-hidden">
        <span class="block animate-marquee"
          >Dump cập nhật free 1 tháng truy cập tài khoản để dowload bản mới nhất</span
        >
      </div>
      <div class="flex items-center">
        <SearchBar />
        <ul class="flex ml-4">
          <li
            v-for="(item, idx) in upperNav"
            :key="idx"
            class="px-4 text-[#013d7b] hover:text-[#333]"
          >
            <router-link :to="item.path">{{ item.text }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="px-[7%] flex items-center h-[70px]">
      <img src="/assets/images/logo.png" alt="" class="h-10 mr-4 mb-2" />
      <ul class="flex items-center h-full">
        <li
          v-for="(item, idx) in mainNav"
          :key="idx"
          class="flex items-center h-full px-4 text-xl text-[#111] hover:bg-[#013d7b] hover:text-white"
        >
          <router-link :to="item.path" class="mt-6">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { upperNav, mainNav } from './data'
import SearchBar from '@/components/kits/navbar/searchbar/index.vue'

export default {
  name: 'NavBar',

  components: {
    SearchBar
  },

  setup() {
    return {
      upperNav,
      mainNav
    }
  }
}
</script>
