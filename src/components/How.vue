<template>
  <section id="how" class="w-full">
    <div class="container relative">
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
        src="/img/etheriumCoin.png"
        alt="etheriumCoin"
        class="absolute top-0 left-0 w-14 h-14 md:w-32 md:h-32"
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
        src="/img/etheriumCoin.png"
        alt="etheriumCoin"
        class="absolute top-[90%] right-0 w-14 h-14 md:w-32 md:h-32"
      />
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
            How to Trade With Krypto
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
        <div
          class="w-full flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div class="w-full md:flex-1">
            <img
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 500,
                },
              }"
              src="/img/howImage.png"
              alt="how"
              class="lg:h-[500px]"
            />
          </div>
          <div
            class="w-full md:flex-1 flex flex-col items-center md:items-start justify-start gap-5"
          >
            <h3
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 100,
                },
              }"
              class="text-2xl font-bold text-primary md:text-3xl lg:text-4xl"
            >
              Steps to trade
            </h3>
            <div class="flex flex-col items-start justify-start gap-6 w-full">
              <div
                v-for="(step, index) in stepsData"
                :key="index"
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :visible="{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 100 * index,
                  },
                }"
                class="w-full md:w-[284px] h-[66px] flex items-center justify-start gap-4 bg-bodybg shadow-stepShad hover:shadow-stephoverShad transition-all duration-300 cursor-pointer rounded-full select-none px-4"
              >
                <span
                  class="w-10 h-10 flex items-center justify-center bg-primary text-bodybg text-base font-medium uppercase rounded-full"
                  >0{{ index + 1 }}</span
                >
                <span class="text-base font-medium md:text-lg text-primary">{{
                  step
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stepsData } from "../constant";
</script>
