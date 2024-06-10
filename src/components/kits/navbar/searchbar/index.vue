<template>
  <div
    class="h-8 w-64 border border-gray-300 flex items-center px-3 py-1 bg-white focus-within:border-blue-300 focus-within:shadow-sm focus-within:shadow-blue-200"
  >
    <input type="text" placeholder="nhập từ khoá" class="flex-1 outline-none" />
    <SearchIcon class="opacity-70" />
  </div>
</template>

<script>
import SearchIcon from '@/components/icons/search-icon.vue'
export default {
  name: 'SearchBar',

  components: {
    SearchIcon
  }
}
</script>
