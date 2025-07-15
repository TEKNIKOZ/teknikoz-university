<template>
  <section class="relative px-4 pb-8">
    <!-- CTA Banner -->
    <div
      class="bg-gradient-to-br from-brand via-blue-600 to-blue-700 rounded-2xl relative overflow-hidden max-w-6xl mx-auto"
    >
      <div class="relative z-10 px-6 py-8">
        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-10 gap-20 items-center">
          <!-- Left Column - Enrollment Urgency -->
          <div class="lg:col-span-3 flex justify-center lg:justify-start">
            <div
              class="bg-gray-900/90 backdrop-blur-sm text-white rounded-xl p-6 relative shadow-xl border border-white/10 w-full max-w-xs"
            >
              <div class="text-center">
                <div class="bg-brand/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <Icon
                    name="mdi:clock-outline"
                    class="text-white text-3xl flex items-center justify-center"
                  />
                </div>
                <div class="space-y-2">
                  <p
                    class="text-sm font-medium text-blue-200 uppercase tracking-wider"
                  >
                    Limited Time
                  </p>
                  <p class="text-lg font-bold text-white">Enroll by</p>
                  <p class="text-3xl font-black text-yellow-400">July 15th</p>
                  <p class="text-sm font-semibold text-white">
                    to Secure Your Spot!
                  </p>
                </div>
              </div>
              <!-- Decorative arrow -->
              <div
                class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900/90"
              ></div>
            </div>
          </div>

          <!-- Right Column - Main Content -->
          <div class="lg:col-span-7 text-center lg:text-left text-white">
            <h2 class="text-2xl lg:text-4xl font-bold mb-3 leading-tight">
              Ready to Transform Your
              <span class="text-yellow-400">Career?</span>
            </h2>
            <p
              class="text-base text-blue-100 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Join TEKNIKOZ University today and unlock your potential with
              world-class mentorship and hands-on learning
            </p>

            <!-- CTA Buttons -->
            <div
              class="flex flex-col lg:flex-row gap-3 justify-center lg:justify-start mb-6"
            >
              <button
                class="group bg-white text-gray-900 px-5 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm"
              >
                <Icon
                  name="mdi:rocket-launch"
                  class="mr-2 text-base group-hover:animate-pulse"
                />
                Start Learning Now
              </button>
              <button
                class="group bg-gray-900/80 backdrop-blur-sm text-white px-5 py-3 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl text-sm"
              >
                <Icon
                  name="mdi:calendar-check"
                  class="mr-2 text-base group-hover:animate-pulse"
                />
                Book Free Consultation
              </button>
              <button
                class="group border-2 border-white/60 text-white px-5 py-3 rounded-full font-semibold hover:bg-white hover:text-brand transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:border-white shadow-lg hover:shadow-xl text-sm"
              >
                <Icon
                  name="mdi:download-outline"
                  class="mr-2 text-base group-hover:animate-bounce"
                />
                Download Course Brochure
              </button>
            </div>

            <!-- Statistics -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-xl max-w-2xl mx-auto lg:mx-0"
            >
              <div class="grid grid-cols-3 gap-4">
                <div class="text-center">
                  <div class="text-3xl font-black text-white mb-1">15K+</div>
                  <div class="text-blue-100 text-xs font-medium">
                    Students Trained
                  </div>
                  <div
                    class="w-8 h-0.5 bg-yellow-400 rounded-full mx-auto mt-1"
                  ></div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black text-white mb-1">95%</div>
                  <div class="text-blue-100 text-xs font-medium">
                    Placement Success
                  </div>
                  <div
                    class="w-8 h-0.5 bg-green-400 rounded-full mx-auto mt-1"
                  ></div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black text-white mb-1">4.8/5</div>
                  <div class="text-blue-100 text-xs font-medium">
                    Student Rating
                  </div>
                  <div class="flex justify-center mt-1">
                    <div class="flex space-x-0.5">
                      <Icon name="mdi:star" class="text-yellow-400 text-xs" />
                      <Icon name="mdi:star" class="text-yellow-400 text-xs" />
                      <Icon name="mdi:star" class="text-yellow-400 text-xs" />
                      <Icon name="mdi:star" class="text-yellow-400 text-xs" />
                      <Icon name="mdi:star" class="text-yellow-400 text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
