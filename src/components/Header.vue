<template>
  <header class="w-full bg-bodybg sticky top-0 z-50">
    <div class="container relative z-40">
      <nav class="w-full flex items-center justify-between gap-6 py-6">
        <RouterLink to="/">
          <h2 class="select-none text-center text-2xl font-bold text-primary">
            Krypto
          </h2>
        </RouterLink>
        <nav class="hidden lg:flex items-center justify-start gap-6">
          <RouterLink
            v-for="link in navLinks"
            :key="link.text"
            :to="link.href"
            class="text-base font-normal uppercase hover:text-primary transition-all duration-300"
            >{{ link.text }}</RouterLink
          >
        </nav>
        <button
          type="button"
          class="hidden lg:flex items-center justify-center gap-6 w-fit h-10 border-2 border-primary px-3 rounded-full outline-none"
        >
          <img src="/img/flagImage.png" alt="flag" class="rounded-full" />
          <i class="fa-solid fa-chevron-down text-sm"></i>
        </button>
        <span @click="toggleMenu" v-if="!isMenuOpen" class="lg:hidden text-2xl">
          <i class="fa-solid fa-bars"></i>
        </span>
      </nav>
    </div>
    <div
      class="lg:hidden flex flex-col h-screen bg-black/20 gap-7 absolute top-0 w-full z-40 transition-all duration-300"
      :class="{ 'left-[0]': isMenuOpen, '-left-[150%]': !isMenuOpen }"
    >
      <nav
        ref="menuRef"
        className="flex flex-col h-full bg-bodybg gap-5 p-4 w-[250px]"
      >
        <div className="w-full flex items-center justify-end">
          <span @click="toggleMenu" className="text-2xl">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <RouterLink
          v-for="link in navLinks"
          :key="link.text"
          :to="link.href"
          @click="toggleMenu"
          class="text-base font-normal uppercase"
          >{{ link.text }}</RouterLink
        >
        <button
          type="button"
          class="flex items-center justify-center gap-6 w-fit h-10 border-2 border-primary px-3 rounded-full outline-none"
        >
          <img src="/img/flagImage.png" alt="flag" class="rounded-full" />
          <i class="fa-solid fa-chevron-down text-sm"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", closeMenuOnClickOutside);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener("mousedown", closeMenuOnClickOutside);
});

const navLinks = [
  {
    href: "#how",
    text: "How it works",
  },
  {
    href: "#crypto",
    text: "Cryptos",
  },
  {
    href: "#feature",
    text: "Features",
  },
  {
    href: "#testimonial",
    text: "Testimonial",
  },
  {
    href: "#university",
    text: "University",
  },
];
</script>
