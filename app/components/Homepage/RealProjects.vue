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
              {{ content.title.main }}
              <span class="text-brand">{{ content.title.highlight1 }}</span
              >{{ content.title.connector }}
              <span class="text-brand">{{ content.title.highlight2 }}</span>
            </h2>
            <p
              class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed"
            >
              {{ content.subtitle }}
            </p>
          </div>
          <div class="md:text-right">
            <button
              @click="navigateTo(content.buttonLink)"
              class="bg-brand text-white px-6 sm:px-8 py-2.5 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 inline-flex items-center justify-center overflow-hidden"
            >
              <span>{{ content.buttonText }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          :class="[
            'group bg-white rounded-2xl border-2 p-6 md:p-8 hover:shadow-xl transition-all duration-300 overflow-hidden',
            project.borderColor,
            project.hoverBorderColor,
          ]"
        >
          <div class="w-full mb-6">
            <div
              class="relative w-full aspect-[16/9] overflow-hidden rounded-xl"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform transition-transform duration-500"
              />
            </div>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {{ project.title }}
          </h3>
          <p class="text-sm md:text-base text-gray-700 font-medium mb-6">
            {{ project.description }}
          </p>

          <button
            @click="navigateTo(`/projects?category=${project.category}`)"
            :class="[
              'w-full text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center group overflow-hidden',
              project.buttonColor,
              project.buttonHoverColor,
            ]"
          >
            <span>{{ content.cardButtonText }}</span>
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
import { REAL_PROJECTS_DATA, REAL_PROJECTS_CONTENT } from "@/constants";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

const projects = REAL_PROJECTS_DATA;
const content = REAL_PROJECTS_CONTENT;
</script>
