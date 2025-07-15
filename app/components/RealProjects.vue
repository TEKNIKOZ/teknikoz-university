<template>
  <section class="py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Real <span class="text-brand">Projects</span>, Real
          <span class="text-brand">Impact</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl text-pretty">
          Create portfolio-ready projects that impress recruiters and showcase
          your skills
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <!-- Left Side - Project Cards -->
        <div class="space-y-6">
          <!-- Windchill BOM Configuration -->
          <div
            @click="selectProject(0)"
            :class="[
              'bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 0
                ? 'border-brand shadow-lg'
                : 'border-gray-200 hover:border-brand/50',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0"
              >
                <Icon name="mdi:cog" class="text-white text-3xl" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Windchill BOM Configuration
                </h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                  Build a complete BOM management system with change control
                </p>
                <button
                  class="text-brand font-semibold text-sm flex items-center gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-brand text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- AI-Powered Predictive Maintenance -->
          <div
            @click="selectProject(1)"
            :class="[
              'bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 1
                ? 'border-brand shadow-lg'
                : 'border-gray-200 hover:border-brand/50',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0"
              >
                <Icon name="mdi:brain" class="text-white text-3xl" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  AI-Powered Predictive Maintenance
                </h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                  Develop machine learning models for industrial equipment
                </p>
                <button
                  class="text-brand font-semibold text-sm flex items-center gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-brand text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Cloud PLM Architecture -->
          <div
            @click="selectProject(2)"
            :class="[
              'bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300',
              selectedProject === 2
                ? 'border-brand shadow-lg'
                : 'border-gray-200 hover:border-brand/50',
            ]"
          >
            <div class="flex items-start">
              <div
                class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0"
              >
                <Icon name="mdi:cloud-outline" class="text-white text-3xl" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Cloud PLM Architecture
                </h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                  Design scalable PLM infrastructure on AWS/Azure
                </p>
                <button
                  class="text-brand font-semibold text-sm flex items-center gap-2"
                >
                  View Project Details
                  <Icon
                    name="mdi:arrow-right"
                    class="text-brand text-lg flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Project Image -->
        <div class="relative">
          <div class="sticky top-8">
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div class="relative">
                <img
                  :src="projects[selectedProject].image"
                  :alt="projects[selectedProject].title"
                  class="w-full h-[480px] object-cover transition-opacity duration-500"
                />
                <!-- PLM Badge -->
                <div
                  class="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {{ projects[selectedProject].category }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          class="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
        >
          See Project Examples
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Import project image
import project1 from "@/assets/images/project1.jpg";

const selectedProject = ref(0);

const projects = ref([
  {
    title: "Windchill BOM Configuration",
    image: project1,
    category: "PLM",
  },
  {
    title: "AI-Powered Predictive Maintenance",
    image: project1,
    category: "AI/ML",
  },
  {
    title: "Cloud PLM Architecture",
    image: project1,
    category: "Cloud",
  },
]);

const selectProject = (index: number) => {
  selectedProject.value = index;
};
</script>
