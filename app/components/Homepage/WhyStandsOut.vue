<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          {{ content.title.main }}
          <span class="text-brand">{{ content.title.highlight }}</span>
          {{ content.title.suffix }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty px-2"
        >
          {{ content.subtitle }}
        </p>
      </div>

      <!-- Features Grid -->
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
      >
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div
            :class="[
              'w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6',
              feature.bgColor,
            ]"
          >
            <Icon
              :name="feature.icon"
              class="text-white text-2xl sm:text-3xl lg:text-4xl"
            />
          </div>
          <h3
            class="text-base lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
            v-html="feature.title"
          ></h3>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          @click="brochureStore.openBrochureModal()"
          class="bg-brand text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden"
        >
          <span>{{ content.buttonText }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBrochureStore } from "@/stores/brochure.stores";
import { WHY_STANDS_OUT_DATA, WHY_STANDS_OUT_CONTENT } from "@/constants";

const brochureStore = useBrochureStore();

const features = WHY_STANDS_OUT_DATA;
const content = WHY_STANDS_OUT_CONTENT;
</script>
