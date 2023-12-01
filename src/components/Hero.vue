<template>
  <section class="w-full bg-herobg bg-no-repeat bg-center md:bg-cover">
    <div class="container h-full flex items-center justify-center relative">
      <div class="w-full flex items-center justify-center flex-col gap-8 py-14">
        <h1
          v-motion
          :initial="{ opacity: 0, y: -150 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 50,
            },
          }"
          class="text-3xl font-bold text-center md:text-5xl lg:text-7xl xl:text-[80px] xl:leading-[normal] xl:max-w-[730px]"
        >
          Next Generation Crypto Trading
        </h1>
        <p class="text-lg font-normal text-center">Crypto Market Starts in</p>
        <div>
          <CountdownTimer targetTime="2023-12-17T23:59:59" />
        </div>
        <div class="flex items-center justify-center gap-3 md:gap-4">
          <button
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 50,
              },
            }"
            type="button"
            class="rounded-full w-fit px-3 md:px-6 py-4 outline-none border-2 border-primary text-white bg-primary text-sm sm:text-base font-bold uppercase hover:bg-primary/60 transition-all duration-300"
          >
            Download app
          </button>
          <button
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 50,
              },
            }"
            type="button"
            class="rounded-full w-fit px-3 md:px-6 py-4 outline-none border-2 border-primary text-white bg-[#160e3380] text-sm sm:text-base font-bold uppercase hover:bg-primary/60 transition-all duration-300"
          >
            Trade crypto
          </button>
        </div>
        <div
          class="w-full flex flex-col items-center justify-center gap-3 pb-6"
        >
          <h4
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{
              opacity: 1,
              transition: {
                delay: 100,
              },
            }"
            class="text-lg font-medium text-center uppercase"
          >
            We accept
          </h4>
          <div
            class="w-full flex flex-wrap items-center justify-center md:flex-nowrap gap-6"
          >
            <div
              v-for="coin in heroCoins"
              :key="coin.text"
              class="flex items-center justify-start gap-2"
            >
              <img :src="coin.img" :alt="coin.text" />
              <span class="text-lg font-normal md:text-xl">{{
                coin.text
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 100,
            duration: 500,
          },
        }"
        src="/img/btcImage.png"
        alt="bitcoin"
        class="absolute top-0 md:top-[20%] left-0 w-10 h-10 md:w-20 md:h-20"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 200,
            duration: 500,
          },
        }"
        src="/img/liteCoin.png"
        alt="litecoin"
        class="absolute top-[20%] md:top-[35%] right-0 w-14 h-14 md:w-32 md:h-32"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 100,
            duration: 700,
          },
        }"
        src="/img/moneroCoin.png"
        alt="litecoin"
        class="absolute top-[90%] right-0 w-10 h-10"
      />
    </div>
  </section>
</template>

<script setup>
import CountdownTimer from "./CountdownTimer.vue";
import { heroCoins } from "../constant";
</script>
