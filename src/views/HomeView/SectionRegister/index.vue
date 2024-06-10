<template>
  <div class="h-[480px] relative">
    <img src="/assets/images/tu-van.png" alt="" class="h-full absolute top-0 left-[10%] z-10" />

    <div class="absolute w-full h-[440px] bottom-0 left-0 bg-blue-pattern z-0">
      <div class="flex flex-col items-end pr-[20%] pt-10">
        <span class="text-white text-[18px] block w-fit"
          >Đăng ký thông tin cá nhân tại đây để nhận những ưu đãi</span
        >
        <div class="flex flex-col space-y-4 w-[450px] mt-8">
          <input
            type="text"
            placeholder="Họ và tên *"
            class="h-9 px-2 outline-none rounded-md shadow-md"
          />
          <input
            type="text"
            placeholder="Email *"
            class="h-9 px-2 outline-none rounded-md shadow-md"
          />
          <input
            type="text"
            placeholder="Số điện thoại *"
            class="h-9 px-2 outline-none rounded-md shadow-md"
          />
          <input
            type="text"
            placeholder="Nhập môn học *"
            class="h-9 px-2 outline-none rounded-md shadow-md"
          />
          <button
            class="text-white h-9 rounded-md border border-white uppercase hover:bg-white hover:text-main-red"
          >
            Đăng ký ngay để nhận ưu đãi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionRegister'
}
</script>
