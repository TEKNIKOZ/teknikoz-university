<template>
  <section class="relative px-4 -mb-32">
    <!-- CTA Banner -->
    <div
      class="bg-gradient-to-r from-brand to-blue-600 rounded-2xl relative z-10 max-w-6xl mx-auto"
    >
      <div class="px-6 py-8">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <!-- Left Side - Enrollment Message -->
          <div class="relative flex-shrink-0">
            <!-- Speech Bubble -->
            <div class="bg-gray-900 text-white rounded-xl p-4 relative">
              <div class="flex items-center">
                <Icon
                  name="mdi:clipboard-edit-outline"
                  class="text-white text-2xl mr-3"
                />
                <div>
                  <p class="text-sm font-semibold">Enroll by</p>
                  <p class="text-blue-300 font-bold">
                    July 15th <span class="text-white">to</span>
                  </p>
                  <p class="text-white font-bold text-sm">Secure Your Spot!</p>
                </div>
              </div>
              <!-- Speech bubble arrow -->
              <div
                class="absolute bottom-0 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900 transform translate-y-full"
              ></div>
            </div>
          </div>

          <!-- Right Side - Main Content, Buttons and Stats -->
          <div class="flex-1 text-white">
            <!-- Main Content -->
            <div class="text-center lg:text-left mb-6">
              <h2 class="text-2xl lg:text-3xl font-bold mb-2">
                Ready to Transform Your Career?
              </h2>
              <p class="text-blue-100 mb-4 text-sm lg:text-base">
                Join TEKNIKOZ University today and unlock your potential with
                world-class mentorship and hands-on learning
              </p>
            </div>

            <!-- CTA Buttons - Horizontal Layout -->
            <div
              class="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start"
            >
              <button
                class="bg-white text-gray-900 px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center text-sm whitespace-nowrap"
              >
                <Icon name="mdi:arrow-right" class="mr-2 text-sm" />
                Start Learning Now
              </button>
              <button
                class="bg-gray-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center text-sm whitespace-nowrap"
              >
                <Icon name="mdi:calendar" class="mr-2 text-sm" />
                Book a Free Consultation
              </button>
              <button
                class="border border-white text-white px-5 py-3 rounded-full font-semibold hover:bg-white hover:text-brand transition-colors duration-300 flex items-center text-sm whitespace-nowrap"
              >
                <Icon name="mdi:download" class="mr-2 text-sm" />
                Download Course Brochure
              </button>
            </div>

            <!-- Statistics - Horizontal Layout -->
            <div class="flex justify-center lg:justify-start gap-8 text-center">
              <div>
                <div class="text-3xl font-bold text-white">15K</div>
                <div class="text-blue-100 text-sm">Students Trained</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">95%</div>
                <div class="text-blue-100 text-sm">Placement Success</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">4.8/5</div>
                <div class="text-blue-100 text-sm">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
