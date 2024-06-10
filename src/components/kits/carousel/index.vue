<template>
  <Carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="autoplayDuration"
    :wrapAround="true"
    :transition="600"
  >
    <Slide v-for="(item, idx) in data" :key="idx" class="h-full">
      <div class="carousel__item mx-2 p-4" v-if="carouselType === 'dump'">
        <DumpCard :cardData="item" :cardLocation="'homepage'" />
      </div>
      <div class="carousel__item mx-2 p-4" v-if="carouselType === 'student'">
        <StudentCard :cardData="item" />
      </div>
      <div class="carousel__item mx-2 p-4" v-if="carouselType === 'video'">
        <CourseCard :cardData="item" />
      </div>

      <div class="carousel__item mx-2 p-4" v-if="carouselType === 'popular'">
        <PopularCard :cardData="item" />
      </div>

      <div class="carousel__item mx-2 p-4" v-if="carouselType === 'cert'">
        <CertCard :cardData="item" />
      </div>

      <div class="carousel__item mx-2 p-4" v-if="carouselType === 'news'">
        <NewsCard :cardData="item" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { mockData } from '@/utils'
import DumpCard from './card/dumps/index.vue'
import StudentCard from './card/students/index.vue'
import CourseCard from './card/courses/index.vue'
import PopularCard from './card/populars/index.vue'
import CertCard from './card/cert/index.vue'
import NewsCard from './card/news/index.vue'
import { computed } from 'vue'

export default {
  name: 'CarouSelComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
    DumpCard,
    StudentCard,
    CourseCard,
    PopularCard,
    CertCard,
    NewsCard
  },

  props: {
    carouselType: {
      type: String,
      require: true,
      default: () => 'dump'
    }
  },

  setup(props) {
    const settings = {
      itemsToShow: 1,
      snapAlign: 'center'
    }

    const breakpoints = computed(() => {
      let ret
      if (props.carouselType === 'dump' || props.carouselType === 'student') {
        ret = {
          // 700px and up
          700: {
            itemsToShow: 3,
            snapAlign: 'center'
          },
          // 1024 and up
          1024: {
            itemsToShow: 4,
            snapAlign: 'start'
          },

          1150: {
            itemsToShow: 5,
            snapAlign: 'start'
          }
        }
      } else if (props.carouselType === 'video' || props.carouselType === 'news') {
        ret = {
          1024: {
            itemsToShow: 2,
            snapAlign: 'start'
          },

          1150: {
            itemsToShow: 3,
            snapAlign: 'start'
          }
        }
      } else if (props.carouselType === 'popular' || props.carouselType === 'cert') {
        ret = {
          1024: {
            itemsToShow: 2,
            snapAlign: 'start'
          },

          1150: {
            itemsToShow: 3.5,
            snapAlign: 'center'
          }
        }
      }

      return ret
    })

    const autoplayDuration = computed(() => {
      let ret
      if (props.carouselType === 'dump' || props.carouselType === 'video') {
        ret = 3000
      } else if (props.carouselType === 'student') {
        ret = 2000
      } else if (props.carouselType === 'news') {
        ret = 4000
      }

      return ret
    })

    const data = computed(() => {
      let ret
      if (props.carouselType === 'dump') {
        ret = mockData.dumps
      } else if (props.carouselType === 'student') {
        ret = mockData.students
      } else if (props.carouselType === 'video') {
        ret = mockData.videoCourses
      } else if (props.carouselType === 'popular') {
        ret = mockData.videoCourses
      } else if (props.carouselType === 'cert') {
        ret = mockData.certs
      } else if (props.carouselType === 'news') {
        ret = mockData.news
      }

      return ret
    })

    return {
      settings,
      breakpoints,
      data,
      autoplayDuration
    }
  }
}
</script>
