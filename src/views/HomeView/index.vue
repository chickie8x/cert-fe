<template>
  <div>
    <div class="mt-5 border-t border-blue-300 border-opacity-50">
      <SectionFeature />
    </div>

    <div class="mt-10">
      <SectionIntro />
    </div>

    <div class="mt-10">
      <SectionStudent />
    </div>

    <div class="mt-10 mx-auto">
      <SectionVideoCourse />
    </div>

    <div class="mt-10">
      <SectionRegister />
    </div>

    <div class="mt-10">
      <SectionPopularCourse />
    </div>

    <div class="mt-10">
      <SectionCert />
    </div>

    <div class="mt-10 w-[80%] mx-auto">
      <SectionNews />
    </div>

    <div class="mt-10">
      <SectionCommunity />
    </div>
  </div>
</template>

<script>
import SectionFeature from '@/views/HomeView/Section-Feature/index.vue'
import SectionIntro from './SectionIntro/index.vue'
import SectionStudent from './SectionStudent/index.vue'
import SectionVideoCourse from './SectionVideoCourse/index.vue'
import SectionRegister from './SectionRegister/index.vue'
import SectionPopularCourse from './SectionPopularCourse/index.vue'
import SectionCert from './SectionCert/index.vue'
import SectionNews from './SectionNews/index.vue'
import SectionCommunity from './SectionCommunity/index.vue'

export default {
  name: 'HomeView',

  components: {
    SectionFeature,
    SectionIntro,
    SectionStudent,
    SectionVideoCourse,
    SectionRegister,
    SectionPopularCourse,
    SectionCert,
    SectionNews,
    SectionCommunity
  }
}
</script>
