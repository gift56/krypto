<template>
  <section id="feature" class="w-full relative">
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <h2 class="text-2xl font-bold text-center md:text-5xl lg:text-6xl">
            Attractive Features
          </h2>
          <p
            class="text-lg font-normal text-center md:text-xl text-white/50 lg:text-2xl"
          >
            Windaful makes playing the UK's best raffles easy and fun.
          </p>
        </div>
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-4 gap-y-8"
        >
          <div
            v-for="(feature, index) in featureData"
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
import { featureData } from "../constant";
</script>
