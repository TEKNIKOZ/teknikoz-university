<template>
  <div class="w-full bg-brand py-6 overflow-hidden">
    <div class="relative">
      <div class="flex animate-scroll-infinite space-x-8 md:space-x-12">
        <div
          v-for="(logo, index) in logos"
          :key="`first-${index}`"
          class="flex-shrink-0 w-24 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
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
          class="flex-shrink-0 w-24 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
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
import clientLogo1 from "@/assets/images/client-logo1.png";
import clientLogo2 from "@/assets/images/client-logo2.png";
import clientLogo3 from "@/assets/images/client-logo3.png";
import clientLogo4 from "@/assets/images/client-logo4.png";
import clientLogo5 from "@/assets/images/client-logo5.png";
import clientLogo6 from "@/assets/images/client-logo6.png";
import clientLogo7 from "@/assets/images/client-logo7.png";
import clientLogo8 from "@/assets/images/client-logo8.png";

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
    transform: translateX(-50%);
  }
}

.animate-scroll-infinite {
  animation: scroll-infinite 20s linear infinite;
  width: calc(200% + 4rem);
}

.animate-scroll-infinite:hover {
  animation-play-state: paused;
}
</style>
