<template>
  <footer class="w-full relative">
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-start justify-between md:flex-row gap-8"
      >
        <div
          class="w-full lg:w-[48%] flex flex-col items-start justify-start gap-6"
        >
          <RouterLink to="/">
            <h2 class="select-none text-center text-2xl font-bold text-primary">
              Krypto
            </h2>
          </RouterLink>
          <p class="text-base font-normal md:text-lg">
            Massa blandit semper varius faucibus. Suspendisse viverra venenatis
            placerat nam ut. Pellentesque sit id tempor turpis.
          </p>
        </div>
        <div class="w-full flex flex-col gap-6 lg:flex-row items-start">
          <div
            class="w-full md:w-[60%] flex flex-col items-start justify-start gap-6"
          >
            <h3 class="text-xl md:text-2xl font-medium text-primary uppercase">
              Company
            </h3>
            <nav class="w-full flex flex-col items-start justify-start gap-4">
              <RouterLink
                v-for="(text, index) in links"
                :key="index"
                :to="text.to"
                class="cursor-pointer text-base md:text-lg font-normal hover:underline transition-all duration-300"
              >
                {{ text.text }}
              </RouterLink>
            </nav>
          </div>
          <div
            class="w-full md:w-[60%] flex flex-col items-start justify-start gap-6"
          >
            <h3 class="text-xl md:text-2xl font-medium text-primary uppercase">
              Legal
            </h3>
            <ul class="w-full flex flex-col items-start justify-start gap-4">
              <li
                v-for="(text, index) in termlinks"
                :key="index"
                class="cursor-pointer text-base md:text-lg font-normal hover:underline transition-all duration-300"
              >
                {{ text }}
              </li>
            </ul>
          </div>
          <div class="w-full flex flex-col items-start justify-start gap-6">
            <h3 class="text-xl md:text-2xl font-medium text-primary uppercase">
              Newsletter
            </h3>
            <div class="flex flex-col items-start justify-start w-full gap-3">
              <p class="text-sm md:text-base font-normal text-white/50">
                Over 25000 people have subscribed
              </p>
              <div
                class="w-full bg-white h-[62px] rounded-full flex items-center justify-between px-2 overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  class="pl-2 w-full outline-none h-full font-hind text-base font-normal placeholder:text-[#aaa7a7] text-bodybg"
                />
                <button
                  type="button"
                  class="rounded-full w-fit px-3 py-2 outline-none border-2 border-primary text-white bg-primary text-sm font-bold uppercase hover:bg-primary/60 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p class="text-sm font-normal text-white/60">
                {{ `We don’t sell your email and spam` }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full mt-7 flex flex-wrap gap-4 md:flex-nowrap items-center justify-center md:justify-between py-4 border-t-2 border-white/20"
      >
        <ul class="flex items-center gap-2">
          <li
            class="cursor-pointer text-sm font-normal hover:underline transition-all duration-300"
          >
            Privacy & Terms
          </li>
          <li
            class="cursor-pointer text-sm font-normal hover:underline transition-all duration-300"
          >
            Contact Us
          </li>
        </ul>
        <span class="text-sm font-normal">Copyright @ 2022 xpence</span>
        <div class="flex items-center justify-center gap-4">
          <i v-for="icon in socialIcons" class="text-lg cursor-pointer fa-brands" :class="icon"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { to: "#how", text: "How it works" },
  { to: "#crypto", text: "Cryptos" },
  { to: "#feature", text: "Features" },
  { to: "#testimonial", text: "Testimonial" },
];
const termlinks = [
  "Terms of use",
  "Terms of conditions",
  "Privecy policy",
  "Cookie policy",
];
const socialIcons = ["fa-youtube", "fa-linkedin", "fa-facebook", "fa-bitcoin"];
</script>
