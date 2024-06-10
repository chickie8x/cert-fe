<template>
  <div class="flex flex-col items-center justify-center bg-main-red text-white h-80">
    <span
      class="text-[32px] font-semibold uppercase block border-b border-white border-opacity-50 py-1"
      >Giới thiệu về dump cloudcert</span
    >
    <div class="flex mt-10 space-x-32">
      <div v-for="(item, idx) in information" :key="idx" class="flex flex-col items-center">
        <span class="text-[40px] block border-b border-white border-opacity-50">{{
          item.value
        }}</span>
        <span class="mt-4">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionIntro',

  setup() {
    const information = [
      {
        value: 69500,
        title: 'Số lượt tiếp cận'
      },

      {
        value: 210,
        title: 'Số người đã pass'
      },

      {
        value: '81%',
        title: 'Tỉ lệ người pass'
      },

      {
        value: 87,
        title: 'Tổng số Dump'
      }
    ]

    return {
      information
    }
  }
}
</script>
