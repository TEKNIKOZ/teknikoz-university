<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          Why <span class="text-brand">TEKNIKOZ</span> E-Learning Stands Out
        </h2>
        <p
          class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-pretty px-2"
        >
          We don't just teach concepts - we prepare you for real-world success
        </p>
      </div>

      <!-- Features Grid -->
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
      >
        <!-- Real World Projects -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
          >
            <Icon
              name="mdi:projector-screen"
              class="text-white text-2xl sm:text-3xl lg:text-4xl"
            />
          </div>
          <h3
            class="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            Real<br />World Projects
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Build portfolio-ready projects solving actual industry challenges
          </p>
        </div>

        <!-- Resume & LinkedIn Makeover -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
          >
            <Icon
              name="mdi:file-document-edit"
              class="text-white text-2xl sm:text-3xl lg:text-4xl"
            />
          </div>
          <h3
            class="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            Resume &<br />LinkedIn Makeover
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Craft a profile that gets noticed by top recruiters
          </p>
        </div>

        <!-- 1:1 Career Mentorship -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
          >
            <Icon
              name="mdi:message-processing"
              class="text-white text-2xl sm:text-3xl lg:text-4xl"
            />
          </div>
          <h3
            class="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            1:1<br />Career Mentorship
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Personalized guidance to accelerate your career
          </p>
        </div>

        <!-- Placement & Interview Prep -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
          >
            <Icon
              name="mdi:account-group"
              class="text-white text-2xl sm:text-3xl lg:text-4xl"
            />
          </div>
          <h3
            class="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            Placement<br />& Interview Prep
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Mock interviews, job referrals, and placement support
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <BrochureDownload />
      </div>
    </div>
  </section>
</template>
