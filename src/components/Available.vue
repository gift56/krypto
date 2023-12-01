<template>
  <section id="crypto" class="w-full relative">
    <img
      v-motion
      :initial="{ opacity: 0, scale: 0.5 }"
      :visible="{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 100,
          duration: 700,
        },
      }"
      src="/img/moneroCoin.png"
      alt="litecoin"
      class="absolute top-0 left-[5%] w-10 h-10"
    />
    <img
      v-motion
      :initial="{ opacity: 0, scale: 0.5 }"
      :visible="{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 200,
          duration: 500,
        },
      }"
      src="/img/liteCoin.png"
      alt="litecoin"
      class="absolute top-[90%] left-0 w-14 h-14 md:w-28 md:h-28"
    />
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100,
              },
            }"
            class="text-2xl font-bold text-center md:text-5xl lg:text-6xl"
          >
            Available Cryptos
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100,
              },
            }"
            class="text-lg font-normal text-center md:text-xl text-white/50 lg:text-2xl"
          >
            Tincidunt id nibh orci nibh just nulla elementum, sed vel.
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
            <swiper-slide v-for="(item, index) in cryptoSliderData">
              <div
                :key="index"
                class="w-full flex flex-col items-start justify-start rounded-xl overflow-hidden"
              >
                <img :src="item.headImage" :alt="item.title" class="w-full" />
                <div
                  class="bg-white w-full flex flex-col items-start justify-start gap-10 p-3"
                >
                  <div>
                    <h3 class="text-xl font-medium text-bodybg md:text-2xl">
                      {{ item.title }}
                    </h3>
                    <p class="text-base font-normal md:text-lg text-bodybg/50">
                      Tincidunt id nibh orci nibh justo. Purus et turpis nulla
                      elementum, sed vel.
                    </p>
                  </div>
                  <div class="w-full flex items-center justify-between gap-5">
                    <h2 class="text-2xl font-bold text-primary uppercase">
                      {{ item.price }}
                    </h2>
                    <button
                      type="button"
                      class="outline-none w-fit px-2 py-2 rounded-full bg-primary border border-primary hover:bg-primary/60 transition-all duration-300 text-base font-bold"
                    >
                      Trade Now
                    </button>
                  </div>
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
import { cryptoSliderData } from "../constant";

export default {
  data() {
    return {
      cryptoSliderData,
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
