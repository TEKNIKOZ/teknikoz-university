<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8 sm:mb-12 md:mb-16">
        <div
          class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8"
        >
          <div class="flex-1">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2"
            >
              Real <span class="text-brand">Projects</span>, Real
              <span class="text-brand">Impact</span>
            </h2>
            <p
              class="text-base sm:text-lg text-gray-600 max-w-2xl text-pretty px-2"
            >
              Create portfolio-ready projects that impress recruiters and
              showcase your skills
            </p>
          </div>

          <!-- CTA Button - Desktop only -->
          <div class="hidden lg:flex flex-shrink-0 px-2 lg:px-0">
            <button
              class="w-full sm:w-auto bg-transparent border border-brand text-brand hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-brand transition-colors duration-300 flex items-center justify-center group"
            >
              See More Projects
              <Icon
                name="mdi:arrow-right"
                class="text-base sm:text-lg flex-shrink-0 ml-2 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12"
      >
        <!-- Left Side - Project Cards -->
        <div class="space-y-4 sm:space-y-6">
          <!-- Windchill BOM Configuration -->
          <div
            @click="selectProject(0)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 0
                ? 'border-brand shadow-lg'
                : 'border-gray-200 hover:border-brand/50',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:cog"
                  class="text-white text-2xl sm:text-2xl lg:text-3xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  Windchill BOM Configuration
                </h3>
                <p
                  class="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed"
                >
                  Build a complete BOM management system with change control
                </p>
                <button
                  class="text-brand font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-brand text-base sm:text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- AI-Powered Predictive Maintenance -->
          <div
            @click="selectProject(1)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 1
                ? 'border-brand shadow-lg'
                : 'border-gray-200 hover:border-brand/50',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:brain"
                  class="text-white text-2xl sm:text-2xl lg:text-3xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  AI-Powered Predictive Maintenance
                </h3>
                <p
                  class="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed"
                >
                  Develop machine learning models for industrial equipment
                </p>
                <button
                  class="text-brand font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-brand text-base sm:text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Cloud PLM Architecture -->
          <div
            @click="selectProject(2)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 2
                ? 'border-brand shadow-lg'
                : 'border-gray-200 hover:border-brand/50',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:cloud-outline"
                  class="text-white text-2xl sm:text-2xl lg:text-3xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  Cloud PLM Architecture
                </h3>
                <p
                  class="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed"
                >
                  Design scalable PLM infrastructure on AWS/Azure
                </p>
                <button
                  class="text-brand font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-brand text-base sm:text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Project Image -->
        <div class="relative order-first lg:order-last">
          <div class="lg:sticky lg:top-8">
            <div
              class="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
            >
              <div class="relative">
                <img
                  :src="projects[selectedProject].image"
                  :alt="projects[selectedProject].title"
                  class="w-full h-[240px] sm:h-[300px] lg:h-[460px] object-cover transition-opacity duration-500"
                />
                <!-- PLM Badge -->
                <div
                  class="absolute top-2 right-2 sm:top-4 sm:right-4 bg-brand text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold"
                >
                  {{ projects[selectedProject].category }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button - Mobile only -->
      <div class="lg:hidden px-2 mt-8">
        <button
          class="w-full bg-transparent border border-brand text-brand hover:text-white px-6 py-2.5 rounded-full font-semibold text-base hover:bg-brand transition-colors duration-300 flex items-center justify-center group"
        >
          See More Projects
          <Icon
            name="mdi:arrow-right"
            class="text-base flex-shrink-0 ml-2 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedProject = ref(0);

const projects = ref([
  {
    title: "Windchill BOM Configuration",
    category: "PLM",
    image: "/images/windchill-bom.jpg",
  },
  {
    title: "AI-Powered Predictive Maintenance",
    category: "AI/ML",
    image: "/images/ai-powered.jpg",
  },
  {
    title: "Cloud PLM Architecture",
    category: "Cloud",
    image: "/images/cloud-plm.jpg",
  },
]);

const selectProject = (index: number) => {
  selectedProject.value = index;
};
</script>
