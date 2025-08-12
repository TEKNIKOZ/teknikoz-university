<template>
  <div class="w-full bg-brand py-6 overflow-hidden">
    <div class="relative">
      <div class="flex animate-scroll-infinite space-x-8 md:space-x-12">
        <div
          v-for="(logo, index) in logos"
          :key="`first-${index}`"
          class="flex-shrink-0 w-20 h-20 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
        >
          <img
            :src="logo"
            :alt="`Client logo ${index + 1}`"
            class="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
        <div
          v-for="(logo, index) in logos"
          :key="`second-${index}`"
          class="flex-shrink-0 w-20 h-20 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
        >
          <img
            :src="logo"
            :alt="`Client logo ${index + 1}`"
            class="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import clientLogo1 from "@/assets/images/bosch.svg";
import clientLogo2 from "@/assets/images/daimler-logo.svg";
import clientLogo3 from "@/assets/images/ford-8.svg";
import clientLogo4 from "@/assets/images/general-motors-2021--1.svg";
import clientLogo5 from "@/assets/images/mahindra-mahindra-logo (1).svg";
import clientLogo6 from "@/assets/images/renault.svg";
import clientLogo7 from "@/assets/images/zf.svg";
import clientLogo8 from "@/assets/images/volvo.svg";

const logos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
];
</script>

<style scoped>
@keyframes scroll-infinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2));
  }
}

.animate-scroll-infinite {
  animation: scroll-infinite 30s linear infinite;
  display: flex;
  width: fit-content;
}

.animate-scroll-infinite:hover {
  animation-play-state: paused;
}
</style>
