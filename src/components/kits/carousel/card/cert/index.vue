<template>
  <div class="w-96 h-96 border-2 border-main-red rounded-lg p-4">
    <img :src="cardData.img" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CertCard',

  props: {
    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>
