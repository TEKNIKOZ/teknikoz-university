<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-orange-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          <span class="text-brand">{{ content.title.highlight }}</span>
          {{ content.title.suffix }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty px-2"
        >
          {{ content.subtitle }}
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative">
        <div class="flex overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Individual testimonial slides for mobile, paired for desktop -->
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="w-full flex-shrink-0 px-2 sm:px-4"
              v-show="isMobile || index % 2 === 0"
            >
              <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              >
                <!-- Current testimonial -->
                <div
                  class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative"
                >
                  <div
                    class="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-5xl lg:text-6xl text-gray-200 font-sans"
                  >
                    "
                  </div>
                  <div class="flex items-start sm:items-center mb-4 sm:mb-6">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0"
                    >
                      <img
                        :src="testimonial.image"
                        :alt="testimonial.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <h4
                        class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 truncate"
                      >
                        {{ testimonial.name }}
                      </h4>
                      <p class="text-brand text-xs sm:text-sm truncate">
                        - {{ testimonial.role }}
                      </p>
                      <div class="flex text-yellow-400 text-xs sm:text-sm mt-1">
                        <Icon v-for="star in 5" :key="star" name="mdi:star" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 leading-relaxed text-sm lg:text-base">
                    "{{ testimonial.testimonial }}"
                  </p>
                </div>

                <!-- Next testimonial for desktop (hidden on mobile) -->
                <div
                  v-if="testimonials[index + 1] && index % 2 === 0"
                  class="hidden sm:block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative"
                >
                  <div
                    class="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-5xl lg:text-6xl text-gray-200 font-sans"
                  >
                    "
                  </div>
                  <div class="flex items-start sm:items-center mb-4 sm:mb-6">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0"
                    >
                      <img
                        :src="testimonials[index + 1].image"
                        :alt="testimonials[index + 1].name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <h4
                        class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 truncate"
                      >
                        {{ testimonials[index + 1].name }}
                      </h4>
                      <p class="text-brand text-xs sm:text-sm truncate">
                        - {{ testimonials[index + 1].role }}
                      </p>
                      <div class="flex text-yellow-400 text-xs sm:text-sm mt-1">
                        <Icon v-for="star in 5" :key="star" name="mdi:star" />
                      </div>
                    </div>
                  </div>
                  <p
                    class="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base"
                  >
                    "{{ testimonials[index + 1].testimonial }}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center mt-6 sm:mt-8 space-x-2">
          <button
            v-for="(slide, index) in isMobile
              ? testimonials.length
              : Math.ceil(testimonials.length / 2)"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300',
              currentSlide === index ? 'bg-gray-900' : 'bg-gray-300',
            ]"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import {
  TESTIMONIALS_SECTION_DATA,
  TESTIMONIALS_SECTION_CONTENT,
} from "@/constants";

const testimonials = TESTIMONIALS_SECTION_DATA;
const content = TESTIMONIALS_SECTION_CONTENT;

const currentSlide = ref(0);
let autoSlideInterval: NodeJS.Timeout;

// Check if screen is mobile
const isMobile = computed(() => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640;
  }
  return false;
});

// Auto-slide functionality
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    const maxSlides = isMobile.value
      ? testimonials.length
      : Math.ceil(testimonials.length / 2);
    currentSlide.value = (currentSlide.value + 1) % maxSlides;
  }, content.autoSlideInterval);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
