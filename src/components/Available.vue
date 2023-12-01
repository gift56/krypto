<template>
  <section class="w-full">
    <div class="container relative">
      <div
        class="w-full py-20 flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <h2 class="text-2xl font-bold text-center md:text-5xl lg:text-6xl">
            Available Cryptos
          </h2>
          <p
            class="text-lg font-normal text-center md:text-xl text-white/50 lg:text-2xl"
          >
            Tincidunt id nibh orci nibh just nulla elementum, sed vel.
          </p>
        </div>
        <div class="w-full">
          <swiper
            :slidesPerView="3"
            :navigation="true"
            :spaceBetween="30"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(item, index) in cryptoSliderData">
              <div
                :key="index"
                class="w-full flex flex-col items-start justify-start rounded-xl overflow-hidden"
              >
                <img :src="item.headImage" :alt="item.title" />
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cryptoSliderData } from "../constant";

export default {
  data() {
    return {
      cryptoSliderData,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
