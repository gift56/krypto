<template>
  <section class="w-full relative">
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <h2 class="text-2xl font-bold text-center md:text-5xl lg:text-6xl">
            30 Million Users Worldwide
          </h2>
          <p
            class="text-lg font-normal text-center md:text-xl text-white/50 lg:text-2xl"
          >
            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
            sed vel.
          </p>
        </div>
        <div class="w-full">
          <div
            class="custom-prev w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-primary/30 absolute z-10 left-[2%] top-[50%] cursor-pointer"
            @click="goPrev"
          >
            <i class="fas fa-chevron-left"></i>
          </div>

          <swiper
            :slidesPerView="getSlidesPerView()"
            :navigation="{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }"
            :autoplay="{
              delay: 3500,
              disableOnInteraction: false,
            }"
            :spaceBetween="getSpaceBetween()"
            :modules="modules"
            class="mySwiper"
            ref="swiper"
          >
            <swiper-slide v-for="(item, index) in testimonyData">
              <div
                :key="index"
                class="w-full flex flex-col gap-8 items-center justify-center px-4 py-4 border border-primary shadow-stepShad hover:shadow-stephoverShad transition-all duration-300 rounded-xl h-[450px] overflow-hidden"
              >
                <img src="/icon/quotesIcon.png" alt="quotes" />
                <p class="text-base text-white/50 font-normal md:text-lg text-center">
                  Tincidunt id nibh orci nibh justo. Purus et turpis nulla
                  elementum, sed vel.
                </p>
                <div class="w-full flex flex-col items-center justify-center text-center">
                  <img src="" alt="">
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div
            class="custom-next w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-primary/30 absolute z-10 right-[2%] top-[50%] cursor-pointer"
            @click="goNext"
          >
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonyData } from "../constant";

export default {
  data() {
    return {
      testimonyData,
      isMobile: false,
      isTablet: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
  mounted() {
    // Check if the device is mobile or tablet
    this.updateDeviceType();

    // Listen for window resize events to update the device type
    window.addEventListener("resize", this.updateDeviceType);
  },
  methods: {
    // Method to update the isMobile variable on window resize
    updateDeviceType() {
      this.isMobile = window.innerWidth <= 640;
      this.isTablet = window.innerWidth <= 1024 && window.innerWidth > 640;
    },

    getSlidesPerView() {
      if (this.isMobile) {
        return 1;
      } else if (this.isTablet) {
        return 2;
      } else {
        return 3;
      }
    },
    getSpaceBetween() {
      return this.isMobile ? 10 : 30;
    },
  },
};
</script>
