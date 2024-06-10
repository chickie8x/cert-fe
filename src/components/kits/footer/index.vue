<template>
  <div class="p-10">
    <div class="flex w-[1156px] mx-auto pb-4">
      <div class="w-2/3">
        <div class="flex">
          <div class="text-gray-700 border-b-2 border-gray-200 pb-4 flex-1">
            <div class="flex items-center space-x-4">
              <img src="/assets/images/logo.png" alt="" class="w-20" />
              <span class="font-semibold text-[36px] text-main-red">CloudCert</span>
            </div>

            <div class="flex space-x-2 items-center mt-4">
              <LocationIcon :color="'#d2384f'" class="scale-90" />
              <span>Hưng Yên</span>
            </div>

            <div class="flex space-x-2 items-center mt-2">
              <PhoneIcon :color="'#d2384f'" class="scale-90" />
              <span>Hotline: 0911 133 001</span>
            </div>

            <div class="flex space-x-2 items-center mt-2">
              <MailIcon :color="'#d2384f'" class="scale-90" />
              <span>cloudcertvn@gmail.com</span>
            </div>
          </div>

          <div class="px-6">
            <span class="text-gray-700 text-2xl font-semibold">Về CloudCert</span>
            <div class="flex flex-col space-y-1 mt-3 text-[#013d7b]">
              <router-link to="/" class="hover:text-[#337ab7]">Điều khoản và dịch vụ</router-link>
              <router-link to="/" class="hover:text-[#337ab7]">Hướng dẫn thanh toán</router-link>
              <router-link to="/" class="hover:text-[#337ab7]">Liên hệ</router-link>
              <router-link to="/" class="hover:text-[#337ab7]">Dump-Ôn thi</router-link>
              <router-link to="/" class="hover:text-[#337ab7]">Phần mềm đọc VCE</router-link>
            </div>
          </div>
        </div>

        <div class="text-gray-700 mt-2">
          <div class="flex items-center space-x-2">
            <ClockIcon :color="'#d2384f'" class="scale-90" />
            <span>Lịch làm việc: Thứ 2 đến thứ CN (7h30 - 22h)</span>
          </div>

          <div class="mt-8 space-x-4 flex items-center">
            <img src="/assets/images/footer-fb.png" alt="" />
            <img src="/assets/images/footer-youtube.png" alt="" />
            <img src="/assets/images/footer-zalo.png" alt="" />
          </div>
        </div>
      </div>

      <div class="w-1/3 pl-16">
        <span class="text-gray-700 font-semibold text-2xl block mb-6">Fanpage</span>
        <div class="relative h-[130px] w-[264px]">
          <img src="/assets/images/footer-fanpage.jpg" alt="" class="h-full" />
          <img src="/assets/images/footer-logo.jpg" alt="" class="absolute top-2 left-2 z-10" />
          <span class="block w-full h-full bg-black bg-opacity-45 absolute top-0 left-0 z-0"></span>
          <span
            class="text-white text-xl absolute top-2 left-16 hover:underline hover:cursor-pointer"
            >CloudCert</span
          >
          <span class="text-sm text-white absolute top-8 left-16">2,1K người theo dõi</span>
          <div
            class="absolute bottom-2 left-2 bg-gray-100 rounded-sm px-2 py-1 flex items-center space-x-1 cursor-pointer"
          >
            <img src="/assets/images/footer-fb.png" alt="" class="w-4 h-4" />
            <span class="text-[12px] font-semibold">Theo dõi trang</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex w-[1156px] mx-auto border-t border-gray-200 text-gray-600 text-sm flex-col items-center py-4"
    >
      <span>© 2023 CloudCert.vn</span>
      <span class="block text-center mt-2"
        >CloudCert doesn't offer Real Microsoft Exam Questions. CloudCert doesn't offer Real Amazon
        Exam Questions. CloudCert Materials do not contain actual questions and answers from Cisco's
        Certification Exams.</span
      >
      <span class="block text-center mt-2"
        >CFA Institute does not endorse, promote or warrant the accuracy or quality of CloudCert.
        CFA® and Chartered Financial Analyst® are registered trademarks owned by CFA Institute.
      </span>
    </div>
  </div>
</template>

<script>
import LocationIcon from '@/components/icons/location-icon.vue'
import MailIcon from '@/components/icons/mail-icon.vue'
import PhoneIcon from '@/components/icons/phone-icon.vue'
import ClockIcon from '@/components/icons/clock-icon.vue'

export default {
  name: 'FooterComponent',

  components: {
    LocationIcon,
    MailIcon,
    PhoneIcon,
    ClockIcon
  }
}
</script>
