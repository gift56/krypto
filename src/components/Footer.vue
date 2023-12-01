<template>
  <footer class="w-full relative">
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-start justify-between md:flex-row gap-8"
      >
        <div class="w-full flex flex-col items-start justify-start gap-6">
          <RouterLink to="/">
            <h2 class="select-none text-center text-2xl font-bold text-primary">
              Krypto
            </h2>
          </RouterLink>
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
</script>
