<template>
  <div
    class="flex items-center justify-center gap-3 h-20 w-full md:w-[400px] bg-bodybg/50 rounded-full select-none"
  >
    <div class="flex flex-col items-center justify-center text-center gap-1">
      <h3 class="text-2xl md:text-3xl font-medium text-primary">{{ days }}</h3>
      <span class="uppercase text-sm font-normal md:text-base">Days</span>
    </div>
    <span>:</span>
    <div class="flex flex-col items-center justify-center text-center gap-1">
      <h3 class="text-2xl md:text-3xl font-medium text-primary">{{ hours }}</h3>
      <span class="uppercase text-sm font-normal md:text-base">Hours</span>
    </div>
    <span>:</span>
    <div class="flex flex-col items-center justify-center text-center gap-1">
      <h3 class="text-2xl md:text-3xl font-medium text-primary">{{ minutes }}</h3>
      <span class="uppercase text-sm font-normal md:text-base">Minutes</span>
    </div>
    <span>:</span>
    <div class="flex flex-col items-center justify-center text-center gap-1">
      <h3 class="text-2xl md:text-3xl font-medium text-primary">{{ seconds }}</h3>
      <span class="uppercase text-sm font-normal md:text-base">Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    targetTime: {
      type: String, // Change the type to match your data format if needed
      required: true,
    },
  },
  data() {
    return {
      timeRemaining: 0,
    };
  },
  computed: {
    days() {
      return String(Math.floor(this.timeRemaining / 86400)).padStart(2, "0");
    },
    hours() {
      return String(Math.floor((this.timeRemaining % 86400) / 3600)).padStart(
        2,
        "0"
      );
    },
    minutes() {
      return String(Math.floor((this.timeRemaining % 3600) / 60)).padStart(
        2,
        "0"
      );
    },
    seconds() {
      return String(this.timeRemaining % 60).padStart(2, "0");
    },
  },
  methods: {
    updateCountdown() {
      const currentTime = new Date();
      this.timeRemaining = Math.max(
        0,
        Math.floor((new Date(this.targetTime) - currentTime) / 1000)
      );
    },
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
};
</script>
