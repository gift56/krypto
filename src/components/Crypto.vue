<template>
  <section id="university" class="w-full relative">
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <h2 class="text-2xl font-bold text-center md:text-5xl lg:text-6xl">
            Crypto Market Analysis
          </h2>
          <p
            class="text-lg font-normal text-center md:text-xl text-white/50 lg:text-2xl"
          >
            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
            sed vel.
          </p>
        </div>
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6"
        >
          <div
            v-for="(testimony, index) in testimonyData"
            class="w-full flex flex-col items-start justify-start gap-3"
          >
            <div :key="index" class="flex items-center justify-start gap-5">
              <img :src="feature.icon" :alt="feature.title" class="" />
              <h2 class="text-xl font-medium md:text-2xl lg:text-3xl">
                {{ feature.title }}
              </h2>
            </div>
            <p class="text-lg md:text-2xl font-normal text-white/50">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonyData } from '../constant';
</script>
