<template>
  <section class="py-12 md:py-20 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="mb-8 md:mb-12">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div class="text-left">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              Real <span class="text-brand">Projects</span>, Real
              <span class="text-brand">Impact</span>
            </h2>
            <p
              class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed"
            >
              Create portfolio-ready projects that impress recruiters and
              showcase your skills
            </p>
          </div>
          <div class="md:text-right">
            <button
              @click="navigateTo('/projects')"
              class="bg-brand text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden"
            >
              <span>See All Projects</span>
              <Icon
                name="mdi:arrow-right"
                class="ml-2 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        <!-- Project Card 1 -->
        <div
          class="group bg-white rounded-2xl border-2 border-purple-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-purple-400"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 md:w-14 md:h-14 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            >
              <Icon name="mdi:cog" class="text-white text-xl md:text-2xl" />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Windchill BOM Configuration
              </h3>
              <p class="text-sm md:text-base text-gray-700 font-medium">
                Build a multi-level BOM system with view-based BOMs and
                configurable parts.
              </p>
            </div>
          </div>

          <button
            @click="navigateTo('/projects?category=PLM Windchill')"
            class="w-full bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden"
          >
            <span>View Project Details</span>
            <Icon
              name="mdi:arrow-right"
              class="ml-2 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        <!-- Project Card 2 -->
        <div
          class="group bg-white rounded-2xl border-2 border-green-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-green-400"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            >
              <Icon name="mdi:cube" class="text-white text-xl md:text-2xl" />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Teamcenter MRO Configuration
              </h3>
              <p class="text-sm md:text-base text-gray-700 font-medium">
                Configure BOM structure for MRO with alternates, substitutes,
                and lifecycle links.
              </p>
            </div>
          </div>

          <button
            @click="navigateTo('/projects?category=Siemens Teamcenter')"
            class="w-full bg-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden"
          >
            <span>View Project Details</span>
            <Icon
              name="mdi:arrow-right"
              class="ml-2 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        <!-- Project Card 3 -->
        <div
          class="group bg-white rounded-2xl border-2 border-orange-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-orange-400"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 md:w-14 md:h-14 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            >
              <Icon name="mdi:cloud" class="text-white text-xl md:text-2xl" />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Cloud PLM Architecture
              </h3>
              <p class="text-sm md:text-base text-gray-700 font-medium">
                Design and deploy scalable PLM infra (Windchill/Teamcenter)
                using EC2, S3, RDS, Load Balancer.
              </p>
            </div>
          </div>

          <button
            @click="navigateTo('/projects?category=Cloud Solutions')"
            class="w-full bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden"
          >
            <span>View Project Details</span>
            <Icon
              name="mdi:arrow-right"
              class="ml-2 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        <!-- Project Card 4 -->
        <div
          class="group bg-white rounded-2xl border-2 border-blue-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-400"
        >
          <div class="flex items-start mb-6">
            <div
              class="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
            >
              <Icon name="mdi:robot" class="text-white text-xl md:text-2xl" />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                AI-Powered Predictive Maintenance
              </h3>
              <p class="text-sm md:text-base text-gray-700 font-medium">
                Build ML models to predict machine failure based on sensor data.
              </p>
            </div>
          </div>

          <button
            @click="navigateTo('/projects?category=AI/ML')"
            class="w-full bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden"
          >
            <span>View Project Details</span>
            <Icon
              name="mdi:arrow-right"
              class="ml-2 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>
