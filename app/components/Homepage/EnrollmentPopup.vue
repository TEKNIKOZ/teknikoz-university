<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"
        @click="closeModal"
      >
        <!-- Dark backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <!-- Modal container -->
        <div class="relative w-full max-w-5xl mx-6">
          <Transition
            enter-active-class="transition duration-500 ease-out transform"
            enter-from-class="opacity-0 scale-90 translate-y-10"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-300 ease-in transform"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-90 translate-y-10"
          >
            <div
              v-if="isOpen"
              class="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 rounded-2xl shadow-2xl overflow-hidden"
              @click.stop
            >
              <!-- Animated background patterns -->
              <div class="absolute inset-0 opacity-20">
                <div
                  class="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"
                ></div>
                <div
                  class="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse delay-300"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"
                ></div>
              </div>

              <!-- Content Grid -->
              <div
                class="relative grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px]"
              >
                <!-- Left side - Main message -->
                <div
                  class="p-6 sm:p-8 lg:p-16 flex flex-col justify-center text-center lg:text-left"
                >
                  <!-- Urgent badge -->
                  <div
                    class="inline-flex items-center gap-2 mb-6 justify-center lg:justify-start"
                  >
                    <span
                      class="text-white/90 font-bold text-sm sm:text-lg uppercase tracking-wider"
                      >🔥 LIMITED TIME OFFER</span
                    >
                  </div>

                  <!-- Main heading -->
                  <h1
                    class="text-4xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight"
                  >
                    SEPTEMBER BATCH<br />
                    <span class="text-yellow-300">NOW OPEN!</span>
                  </h1>

                  <!-- Seats counter -->
                  <div class="mb-4 sm:mb-8">
                    <p class="text-lg sm:text-2xl text-white/90 mb-2">
                      Hurry! Only
                    </p>
                    <div
                      class="flex items-baseline gap-2 sm:gap-3 justify-center lg:justify-start"
                    >
                      <span
                        class="text-5xl sm:text-6xl lg:text-7xl font-black text-yellow-300"
                        >50</span
                      >
                      <span
                        class="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
                        >SEATS LEFT</span
                      >
                    </div>
                  </div>

                  <!-- Countdown timer -->
                  <div
                    class="bg-black/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full sm:w-auto mx-auto lg:mx-0"
                  >
                    <p
                      class="text-white/80 text-xs sm:text-sm uppercase tracking-wide mb-2 text-center"
                    >
                      Registration closes in
                    </p>
                    <div class="flex justify-center gap-3 sm:gap-4">
                      <div class="text-center">
                        <div
                          class="text-3xl sm:text-4xl lg:text-4xl font-black text-white"
                        >
                          {{ Math.floor(timeLeft.days) }}
                        </div>
                        <div class="text-xs text-white/60 uppercase">Days</div>
                      </div>
                      <div
                        class="text-3xl sm:text-4xl lg:text-4xl font-black text-white/40"
                      >
                        :
                      </div>
                      <div class="text-center">
                        <div
                          class="text-3xl sm:text-4xl lg:text-4xl font-black text-white"
                        >
                          {{ Math.floor(timeLeft.hours) }}
                        </div>
                        <div class="text-xs text-white/60 uppercase">Hours</div>
                      </div>
                      <div
                        class="text-3xl sm:text-4xl lg:text-4xl font-black text-white/40"
                      >
                        :
                      </div>
                      <div class="text-center">
                        <div
                          class="text-3xl sm:text-4xl lg:text-4xl font-black text-white"
                        >
                          {{ Math.floor(timeLeft.minutes) }}
                        </div>
                        <div class="text-xs text-white/60 uppercase">
                          Minutes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right side - Features & CTA -->
                <div
                  class="bg-white p-6 sm:p-8 lg:p-16 flex flex-col justify-center"
                >
                  <!-- Special offer banner - Hidden on mobile -->
                  <div
                    class="hidden sm:block bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-3 mb-6 sm:mb-8 text-center"
                  >
                    <p class="font-bold text-sm sm:text-lg">
                      🎉 SAVE 30% - Early Bird Special!
                    </p>
                  </div>

                  <!-- Features list - Hidden on mobile -->
                  <div
                    class="hidden sm:block space-y-3 sm:space-y-4 mb-6 sm:mb-10"
                  >
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Icon
                          name="mdi:check-bold"
                          class="w-3 h-3 sm:w-5 sm:h-5 text-white"
                        />
                      </div>
                      <p
                        class="text-base sm:text-lg lg:text-xl font-bold text-gray-800"
                      >
                        6 Months Industry Training
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Icon
                          name="mdi:check-bold"
                          class="w-3 h-3 sm:w-5 sm:h-5 text-white"
                        />
                      </div>
                      <p
                        class="text-base sm:text-lg lg:text-xl font-bold text-gray-800"
                      >
                        100% Job Placement Support
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Icon
                          name="mdi:check-bold"
                          class="w-3 h-3 sm:w-5 sm:h-5 text-white"
                        />
                      </div>
                      <p
                        class="text-base sm:text-lg lg:text-xl font-bold text-gray-800"
                      >
                        Live Projects & Certifications
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Icon
                          name="mdi:check-bold"
                          class="w-3 h-3 sm:w-5 sm:h-5 text-white"
                        />
                      </div>
                      <p
                        class="text-base sm:text-lg lg:text-xl font-bold text-gray-800"
                      >
                        Expert Mentorship Program
                      </p>
                    </div>
                  </div>

                  <!-- CTA Buttons -->
                  <button
                    @click="enrollNow"
                    class="w-full border-2 border-orange-600 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-black text-lg sm:text-xl py-3 sm:py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl mb-3 sm:mb-4"
                  >
                    ENROLL NOW →
                  </button>

                  <button
                    @click="learnMore"
                    class="w-full border-2 border-gray-800 text-gray-800 font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 mb-4 sm:mb-0"
                  >
                    View Course Details
                  </button>

                  <!-- Trust badges - Hidden on mobile -->
                  <div
                    class="hidden sm:flex items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8"
                  >
                    <div class="text-center">
                      <p class="text-2xl sm:text-3xl font-black text-gray-800">
                        5000+
                      </p>
                      <p class="text-xs sm:text-sm text-gray-600">
                        Alumni Network
                      </p>
                    </div>
                    <div class="w-px h-8 sm:h-12 bg-gray-300"></div>
                    <div class="text-center">
                      <p class="text-2xl sm:text-3xl font-black text-gray-800">
                        4.9★
                      </p>
                      <p class="text-xs sm:text-sm text-gray-600">
                        Student Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";

const isOpen = ref(false);
const currentTime = ref(new Date());
let timer = null;
const targetDate = new Date("2025-09-30T23:59:59");

const timeLeft = computed(() => {
  const diff = targetDate - currentTime.value;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
});

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date();
  }, 60000);

  // Check if user has already seen the popup
  const seen = localStorage.getItem("enrollmentPopupSeen");
  if (!seen) {
    setTimeout(() => {
      isOpen.value = true;
    }, 1000);
  }
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

const closeModal = () => {
  isOpen.value = false;
  localStorage.setItem("enrollmentPopupSeen", "true");
};

const enrollNow = () => {
  navigateTo("/signup");
  closeModal();
};

const learnMore = () => {
  navigateTo("/courses");
  closeModal();
};

defineExpose({
  isOpen,
});
</script>
