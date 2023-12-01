<template>
  <section
    class="w-full bg-advancebg bg-no-repeat bg-fixed bg-center md:bg-cover md:h-[75vh]"
  >
    <div class="container h-full flex items-center justify-center relative">
      <div class="w-full flex items-center justify-center flex-col gap-8 py-14">
        <h1
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
          Most advanced crypto trading platfrom ever!
        </h1>
        <div class="flex items-center justify-center gap-3 md:gap-4">
          <RouterLink to="/"
            ><img
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100,
                  duration: 500,
                },
              }"
              src="/img/googlePlay.png"
              alt="googleplay"
          /></RouterLink>
          <RouterLink to="/"
            ><img
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 100,
                  duration: 500,
                },
              }"
              src="/img/appleStore.png"
              alt="applestore"
          /></RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
