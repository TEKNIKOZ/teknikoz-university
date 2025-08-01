<template>
  <section class="w-full relative overflow-hidden">
    <div
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 md:py-16 lg:py-24"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
      >
        <!-- Left Content -->
        <div class="order-2 lg:order-1 text-center lg:text-left">
          <!-- Main Heading -->
          <h1
            class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-none mb-4 sm:mb-6"
          >
            <span class="text-gray-900">BECOME A </span>
            <span class="text-brand">PLM & AI CHAMPION</span>
            <span class="text-gray-900"> WITH REAL PROJECT EXPOSURE</span>
          </h1>

          <!-- Subtitle -->
          <div class="space-y-1 mb-6 sm:mb-8 text-gray-600">
            <p class="text-base sm:text-lg font-medium">
              Learn from Industry Veterans. Get Certified.
            </p>
            <p class="text-base sm:text-lg font-medium">
              Master Real-World Tools. Transform Your Career.
            </p>
          </div>

          <!-- Statistics in Horizontal Layout -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <div
              class="flex items-center justify-center lg:justify-start space-x-3"
            >
              <div
                class="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center"
              >
                <Icon
                  name="mdi:account-group"
                  class="w-4 h-4 lg:w-5 lg:h-5 text-white"
                />
              </div>
              <span class="text-base sm:text-lg font-semibold text-gray-800">
                <span class="text-brand">15,000+</span> Students Trained
              </span>
            </div>

            <div
              class="flex items-center justify-center lg:justify-start space-x-3"
            >
              <div
                class="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center"
              >
                <Icon
                  name="mdi:chart-line"
                  class="w-4 h-4 lg:w-5 lg:h-5 text-white"
                />
              </div>
              <span class="text-base sm:text-lg font-semibold text-gray-800">
                <span class="text-brand">95%</span> Success Rate
              </span>
            </div>

            <div
              class="flex items-center justify-center lg:justify-start space-x-3 sm:col-span-2"
            >
              <div
                class="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center"
              >
                <Icon
                  name="mdi:certificate"
                  class="w-4 h-4 lg:w-5 lg:h-5 text-white"
                />
              </div>
              <span class="text-base sm:text-lg font-semibold text-gray-800">
                Industry-Recognized Certifications
              </span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <NuxtLink
              to="/enroll"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-brand bg-brand text-white font-semibold rounded-full transition-all duration-200 text-sm sm:text-base group"
            >
              <Icon
                name="mdi:play-circle"
                class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
              />
              Start Learning Now
            </NuxtLink>

            <button
              @click="brochureStore.openBrochureModal()"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-brand text-brand font-semibold rounded-full hover:bg-brand hover:text-white transition-all duration-200 text-sm sm:text-base group"
            >
              <Icon
                name="mdi:file-download"
                class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
              />
              Download Brochure
            </button>
          </div>
        </div>

        <!-- Right Content - Hero Image -->
        <div class="order-1 lg:order-2 relative">
          <div class="relative">
            <!-- Main Hero Image with rounded corners -->
            <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="/assets/images/hero-header.png"
                alt="PLM & AI Champion"
                class="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            <!-- Floating Badges -->
            <div
              class="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6"
            >
              <div
                class="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-3 rounded-lg text-sm font-bold shadow-lg"
              >
                Live Project<br />
                <span class="text-xs font-medium">Windchill BOM Config</span>
              </div>
            </div>

            <div
              class="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6"
            >
              <div
                class="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-3 rounded-lg text-sm font-bold shadow-lg"
              >
                AI Certification<br />
                <span class="text-xs sm:text-sm font-medium"
                  >Industry Ready</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Brochure Modal -->
    <BrochureModal />
  </section>
</template>

<script setup lang="ts">
import { useBrochureStore } from "@/stores/brochure.stores";

const brochureStore = useBrochureStore();
</script>
