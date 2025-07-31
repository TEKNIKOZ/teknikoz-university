<template>
  <section class="relative px-4 pb-6 sm:pb-8 bg-gray-50">
    <!-- CTA Banner -->
    <div
      class="bg-gradient-to-br from-brand via-blue-600 to-blue-700 rounded-xl sm:rounded-2xl relative overflow-hidden max-w-6xl mx-auto"
    >
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
                <div
                  class="bg-brand/20 rounded-full p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4"
                >
                  <Icon
                    name="mdi:clock-outline"
                    class="text-white text-2xl sm:text-3xl flex items-center justify-center"
                  />
                </div>
                <div class="space-y-1 sm:space-y-2">
                  <p
                    class="text-xs sm:text-sm font-medium text-blue-200 uppercase tracking-wider"
                  >
                    Limited Time
                  </p>
                  <p class="text-base sm:text-lg font-bold text-white">
                    Enroll by
                  </p>
                  <p class="text-2xl sm:text-3xl font-black text-yellow-400">
                    July 15th
                  </p>
                  <p class="text-xs sm:text-sm font-semibold text-white">
                    to Secure Your Spot!
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
              class="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight px-2 lg:px-0"
            >
              Ready to Transform Your
              <span class="text-yellow-400">Career?</span>
            </h2>
            <p
              class="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0"
            >
              Join TEKNIKOZ University today and unlock your potential with
              world-class mentorship and hands-on learning
            </p>

            <!-- CTA Buttons -->
            <div
              class="flex flex-col sm:flex-row lg:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6"
            >
              <button
                @click="contactStore.openContactModal()"
                class="group bg-white text-gray-900 px-4 sm:px-5 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm"
              >
                <Icon
                  name="mdi:rocket-launch"
                  class="mr-1.5 sm:mr-2 text-sm sm:text-base group-hover:animate-pulse"
                />
                Start Learning Now
              </button>
              <button
                @click="contactStore.openContactModal()"
                class="group bg-gray-900/80 backdrop-blur-sm text-white px-4 sm:px-5 py-3 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm"
              >
                <Icon
                  name="mdi:calendar-check"
                  class="mr-1.5 sm:mr-2 text-sm sm:text-base group-hover:animate-pulse"
                />
                Book Free Consultation
              </button>
              <BrochureDownload variant="hero" />
            </div>

            <!-- Statistics -->
            <div
              class="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white/90"
            >
              <div class="flex items-center gap-1.5">
                <div class="text-lg sm:text-xl font-bold text-yellow-400">
                  15K+
                </div>
                <div class="text-xs sm:text-sm">Students</div>
              </div>
              <div class="w-px h-4 bg-white/30"></div>
              <div class="flex items-center gap-1.5">
                <div class="text-lg sm:text-xl font-bold text-green-400">
                  95%
                </div>
                <div class="text-xs sm:text-sm">Placed</div>
              </div>
              <div class="w-px h-4 bg-white/30"></div>
              <div class="flex items-center gap-1.5">
                <div
                  class="text-lg sm:text-xl font-bold text-yellow-400 flex items-center gap-1"
                >
                  4.8
                  <Icon
                    name="mdi:star"
                    class="text-yellow-400 text-sm sm:text-base"
                  />
                </div>
                <div class="text-xs sm:text-sm">Rating</div>
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

const contactStore = useContactStore();
</script>
