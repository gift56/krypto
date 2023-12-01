<template>
  <section
    class="w-full md:h-screen bg-herobg bg-no-repeat bg-center md:bg-cover bg-fixed transition-all duration-200"
  >
    <div class="container h-full flex items-center justify-center relative">
      <div
        class="w-full flex items-center justify-center flex-col gap-8 py-14 md:py-0"
      >
        <h1
          class="text-3xl font-bold text-center md:text-5xl lg:text-7xl xl:text-[80px] xl:leading-[normal] xl:max-w-[730px]"
        >
          Next Generation Crypto Trading
        </h1>
        <p class="text-lg font-normal text-center">Crypto Market Starts in</p>
        <div>
          <CountdownTimer targetTime="2023-12-17T23:59:59" />
        </div>
        <div class="flex items-center justify-center gap-4">
          <button
            type="button"
            class="rounded-full w-fit px-6 py-4 outline-none border-2 border-primary text-white bg-primary text-base font-bold uppercase hover:bg-primary/60 transition-all duration-300"
          >
            Download app
          </button>
          <button
            type="button"
            class="rounded-full w-fit px-6 py-4 outline-none border-2 border-primary text-white bg-primary text-base font-bold uppercase hover:bg-primary/60 transition-all duration-300"
          >
            Trade crypto
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CountdownTimer from "./CountdownTimer.vue";
</script>
