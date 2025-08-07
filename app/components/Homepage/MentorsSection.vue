<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          Mentored by the
          <span class="text-brand">Top 1%</span> Global Experts
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty px-2"
        >
          Learn directly from industry leaders who've built PLM and AI solutions
          for Fortune 500 companies
        </p>
      </div>

      <!-- Mentors Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
      >
        <!-- Dr. Sarah Johnson -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              src="/assets/images/teacher1.png"
              alt="Dr. Sarah Johnson"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Dr. Sarah Johnson
          </h3>
          <div
            class="h-0.5 w-12 sm:w-16 bg-gray-900 mb-3 sm:mb-4 mx-auto"
          ></div>
          <p class="text-brand font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            PLM Expert, 22+ Years at Siemens
          </p>
          <p
            class="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed"
          >
            Led PLM implementations for Fortune 500 companies
          </p>

          <!-- Skills badges -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Windchill
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Teamcenter
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Change Management
            </span>
          </div>
        </div>

        <!-- Michael Chen -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              src="/assets/images/teacher2.png"
              alt="Michael Chen"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Michael Chen
          </h3>
          <div
            class="h-0.5 w-12 sm:w-16 bg-gray-900 mb-3 sm:mb-4 mx-auto"
          ></div>
          <p class="text-brand font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            AI/ML Director, Ex-Google
          </p>
          <p
            class="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed"
          >
            Built AI solutions for manufacturing and engineering
          </p>

          <!-- Skills badges -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Machine Learning
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Cloud AI
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Industry 4.0
            </span>
          </div>
        </div>

        <!-- Priya Sharma -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              src="/assets/images/teacher3.png"
              alt="Priya Sharma"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Priya Sharma
          </h3>
          <div
            class="h-0.5 w-12 sm:w-16 bg-gray-900 mb-3 sm:mb-4 mx-auto"
          ></div>
          <p class="text-brand font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            Cloud Solutions Architect, AWS
          </p>
          <p
            class="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed"
          >
            Specializes in PLM cloud migrations and DevOps
          </p>

          <!-- Skills badges -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              AWS
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Azure
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              DevOps
            </span>
            <span
              class="bg-brand text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              Cloud Migration
            </span>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          class="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Meet Your Mentors
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Images are now referenced directly from the public directory
</script>
