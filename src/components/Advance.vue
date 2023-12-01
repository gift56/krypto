<template>
  <section
    class="w-full bg-advancebg bg-no-repeat bg-center md:bg-cover md:h-screen"
  >
    <div class="container h-full flex items-center justify-center relative">
      <div class="w-full flex items-center justify-center flex-col gap-8 py-14">
        <h1 class="text-2xl font-bold text-center md:text-5xl lg:text-6xl">
          Most advanced crypto trading platfrom ever!
        </h1>
        <div class="flex items-center justify-center gap-3 md:gap-4">
         
        </div>
        <div
          class="w-full flex flex-col items-center justify-center gap-3 pb-6"
        >
          <h4 class="text-lg font-medium text-center uppercase">We accept</h4>
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
    </div>
  </section>
</template>

<script setup></script>
