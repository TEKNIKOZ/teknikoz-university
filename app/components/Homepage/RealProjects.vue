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
              @click="navigateTo('/projects')"
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
          <!-- PLM Windchill Project -->
          <div
            @click="selectProject(0)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 0
                ? 'border-purple-500 shadow-lg'
                : 'border-gray-200 hover:border-purple-300',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:cog"
                  class="text-white text-lg sm:text-xl lg:text-2xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  Windchill BOM Configuration
                </h3>
                <p
                  class="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed"
                >
                  Build a multi-level BOM system with view-based BOMs and configurable parts.
                </p>
                <button
                  @click.stop="navigateTo('/projects?category=PLM Windchill')"
                  class="text-purple-600 hover:text-purple-700 font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-base sm:text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Siemens Teamcenter Project -->
          <div
            @click="selectProject(1)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 1
                ? 'border-green-500 shadow-lg'
                : 'border-gray-200 hover:border-green-300',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:cube"
                  class="text-white text-lg sm:text-xl lg:text-2xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  Teamcenter MRO Configuration
                </h3>
                <p
                  class="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed"
                >
                  Configure BOM structure for MRO with alternates, substitutes, and lifecycle links.
                </p>
                <button
                  @click.stop="navigateTo('/projects?category=Siemens Teamcenter')"
                  class="text-green-600 hover:text-green-700 font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-base sm:text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Cloud Solutions Project -->
          <div
            @click="selectProject(2)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 2
                ? 'border-orange-500 shadow-lg'
                : 'border-gray-200 hover:border-orange-300',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:cloud"
                  class="text-white text-lg sm:text-xl lg:text-2xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  Cloud PLM Architecture
                </h3>
                <p
                  class="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed"
                >
                  Design and deploy scalable PLM infra (Windchill/Teamcenter) using EC2, S3, RDS, Load Balancer.
                </p>
                <button
                  @click.stop="navigateTo('/projects?category=Cloud Solutions')"
                  class="text-orange-600 hover:text-orange-700 font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-base sm:text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- AI/ML Project -->
          <div
            @click="selectProject(3)"
            :class="[
              'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 3
                ? 'border-blue-500 shadow-lg'
                : 'border-gray-200 hover:border-blue-300',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <Icon
                  name="mdi:robot"
                  class="text-white text-lg sm:text-xl lg:text-2xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  AI-Powered Predictive Maintenance
                </h3>
                <p
                  class="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed"
                >
                  Build ML models to predict machine failure based on sensor data.
                </p>
                <button
                  @click.stop="navigateTo('/projects?category=AI/ML')"
                  class="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-base sm:text-lg flex-shrink-0"
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
                  :class="[
                    'absolute top-2 right-2 sm:top-4 sm:right-4 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold',
                    getCategoryBadgeColor(selectedProject)
                  ]"
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
          @click="navigateTo('/projects')"
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
import windchillBom from "@/assets/images/windchill-bom.jpg";
import aiPowered from "@/assets/images/ai-powered.jpg";
import cloudPlm from "@/assets/images/cloud-plm.jpg";

const selectedProject = ref(0);

const projects = ref([
  {
    title: "Windchill BOM Configuration",
    category: "PLM Windchill",
    image: windchillBom,
  },
  {
    title: "Teamcenter MRO Configuration", 
    category: "Siemens Teamcenter",
    image: windchillBom, // We'll use the same image for now
  },
  {
    title: "Cloud PLM Architecture",
    category: "Cloud Solutions",
    image: cloudPlm,
  },
  {
    title: "AI-Powered Predictive Maintenance",
    category: "AI/ML",
    image: aiPowered,
  },
]);

const selectProject = (index: number) => {
  selectedProject.value = index;
};

const getCategoryBadgeColor = (index: number) => {
  const colors = {
    0: 'bg-purple-500', // PLM Windchill
    1: 'bg-green-500',  // Teamcenter
    2: 'bg-orange-500', // Cloud
    3: 'bg-blue-500',   // AI/ML
  };
  return colors[index] || 'bg-brand';
};
</script>
