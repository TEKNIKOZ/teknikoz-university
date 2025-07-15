<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mentored by the
          <span class="text-brand">Top 1%</span> Global Experts
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
          Learn directly from industry leaders who've built PLM and AI solutions
          for Fortune 500 companies
        </p>
      </div>

      <!-- Mentors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Dr. Sarah Johnson -->
        <div
          class="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              :src="teacher1"
              alt="Dr. Sarah Johnson"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Dr. Sarah Johnson
          </h3>
          <div class="h-0.5 w-16 bg-gray-900 mb-4"></div>
          <p class="text-brand font-semibold mb-3">
            PLM Expert, 22+ Years at Siemens
          </p>
          <p class="text-gray-600 text-sm mb-6 leading-relaxed">
            Led PLM implementations for Fortune 500 companies
          </p>

          <!-- Skills badges -->
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Windchill
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Teamcenter
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Change Management
            </span>
          </div>
        </div>

        <!-- Michael Chen -->
        <div
          class="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              :src="teacher2"
              alt="Michael Chen"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
          <div class="h-0.5 w-16 bg-gray-900 mb-4"></div>
          <p class="text-brand font-semibold mb-3">AI/ML Director, Ex-Google</p>
          <p class="text-gray-600 text-sm mb-6 leading-relaxed">
            Built AI solutions for manufacturing and engineering
          </p>

          <!-- Skills badges -->
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Machine Learning
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Cloud AI
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Industry 4.0
            </span>
          </div>
        </div>

        <!-- Priya Sharma -->
        <div
          class="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200"
          >
            <img
              :src="teacher3"
              alt="Priya Sharma"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
          <div class="h-0.5 w-16 bg-gray-900 mb-4"></div>
          <p class="text-brand font-semibold mb-3">
            Cloud Solutions Architect, AWS
          </p>
          <p class="text-gray-600 text-sm mb-6 leading-relaxed">
            Specializes in PLM cloud migrations and DevOps
          </p>

          <!-- Skills badges -->
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              AWS
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Azure
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              DevOps
            </span>
            <span
              class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Change Management
            </span>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          class="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Meet Your Mentors
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import teacher images
import teacher1 from "@/assets/images/teacher1.png";
import teacher2 from "@/assets/images/teacher2.png";
import teacher3 from "@/assets/images/teacher3.png";
</script>
