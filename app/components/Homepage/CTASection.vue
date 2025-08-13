<template>
  <section class="relative px-4 pb-6 sm:pb-8 bg-gray-50">
    <!-- CTA Banner -->
    <div
      class="bg-gradient-to-br from-brand via-blue-600 to-blue-700 rounded-xl sm:rounded-2xl relative overflow-hidden max-w-6xl mx-auto"
    >
      <!-- Decorative soft shapes -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute -top-10 -left-10 w-40 h-40 bg-white/15 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute -bottom-16 -right-16 w-56 h-56 bg-yellow-400/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        ></div>
      </div>

      <div class="relative z-10 px-4 sm:px-6 py-6 sm:py-8">
        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-10 gap-6 sm:gap-8 lg:gap-20 items-center">
          <!-- Left Column - Enrollment Urgency -->
          <div
            class="lg:col-span-3 flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div
              class="bg-gray-900/90 backdrop-blur-sm text-white rounded-lg sm:rounded-xl p-4 relative shadow-xl border border-white/10 w-full max-w-xs"
            >
              <div class="text-center">
                <div class="space-y-1 sm:space-y-2">
                  <p
                    class="text-xs sm:text-sm font-medium text-blue-200 uppercase tracking-wider"
                  >
                    {{ content.enrollment.limitedTime }}
                  </p>
                  <p class="text-base sm:text-lg font-bold text-white">
                    {{ content.enrollment.title }}
                  </p>
                  <p class="text-2xl sm:text-3xl font-black text-yellow-400">
                    {{ content.enrollment.subtitle }}
                  </p>
                  <p class="text-xs sm:text-sm font-semibold text-white">
                    {{ content.enrollment.seatsLeft }}
                  </p>
                </div>
              </div>
              <!-- Decorative arrow - hidden on mobile -->
              <div
                class="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-gray-900/90 hidden lg:block"
              ></div>
            </div>
          </div>

          <!-- Right Column - Main Content -->
          <div
            class="lg:col-span-7 text-center lg:text-left text-white order-2 lg:order-2"
          >
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 leading-tight px-2 lg:px-0"
            >
              {{ content.title.main }}
              <span class="text-yellow-400">{{ content.title.highlight }}</span>
            </h2>
            <p
              class="text-base sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0"
            >
              {{ content.subtitle }}
            </p>

            <!-- CTA Buttons -->
            <div
              class="flex flex-col sm:flex-row lg:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6"
            >
              <button
                @click="contactStore.openContactModal()"
                class="group bg-white text-gray-900 px-4 sm:px-5 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm border border-white/10"
              >
                <Icon
                  name="mdi:rocket-launch"
                  class="text-sm sm:text-base group-hover:animate-pulse"
                />
                <span>Start Learning Now</span>
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
              <button
                @click="contactStore.openContactModal()"
                class="group bg-gray-900/80 backdrop-blur-sm text-white px-4 sm:px-5 py-4 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm border border-gray-900/10"
              >
                <Icon
                  name="mdi:calendar-check"
                  class="text-sm sm:text-base group-hover:animate-pulse"
                />
                <span>Book Free Consultation</span>
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
              <BrochureDownload variant="hero" />
            </div>

            <!-- Statistics -->
            <div
              class="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white/90"
            >
              <div
                v-for="(stat, index) in content.statistics"
                :key="stat.label"
                class="flex items-center gap-1.5"
              >
                <div
                  v-if="index > 0"
                  class="w-px h-4 bg-white/30 mr-4 sm:mr-6"
                ></div>
                <div
                  :class="[
                    'text-lg sm:text-xl font-bold flex items-center gap-1',
                    stat.color,
                  ]"
                >
                  {{ stat.value }}
                  <Icon
                    v-if="stat.icon"
                    :name="stat.icon"
                    :class="['text-sm sm:text-base', stat.color]"
                  />
                </div>
                <div class="text-xs sm:text-sm">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactStore } from "@/stores/contact.stores";
import { CTA_SECTION_CONTENT } from "@/constants";

const contactStore = useContactStore();

const content = CTA_SECTION_CONTENT;
</script>
