<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-pretty px-2"
        >
          {{ content.title.main }}
          <span class="text-brand">{{ content.title.highlight }}</span>
          {{ content.title.suffix }}
          <span class="text-gray-900">{{ content.title.highlight2 }}</span>
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2"
        >
          {{ content.subtitle }}
        </p>
      </div>

      <!-- Courses Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
      >
        <div
          v-for="course in courses"
          :key="course.id"
          :class="[
            'bg-white rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 hover:shadow-xl transition-all duration-300',
            course.borderColor,
            course.hoverBorderColor,
          ]"
        >
          <div class="flex flex-col">
            <div class="flex items-center mb-4">
              <div
                :class="[
                  'shrink-0 flex items-center justify-center mr-4',
                  'w-12 h-12 sm:w-14 sm:h-14 rounded-full',
                  course.bgColor,
                ]"
              >
                <Icon
                  :name="course.icon"
                  class="text-white w-7 h-7 sm:w-8 sm:h-8"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                />
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                  {{ course.title }}
                </h3>
              </div>
            </div>

            <p class="text-sm sm:text-base text-gray-900 font-medium mb-2">
              {{ course.subtitle }}
            </p>

            <p class="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              {{ course.description }}
            </p>

            <!-- Key Topics -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">
                {{ content.learningAreasLabel }}
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div
                  v-for="area in course.learningAreas"
                  :key="area"
                  class="group flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <span class="flex items-center justify-center">
                    <Icon
                      name="mdi:chevron-right"
                      :class="[
                        'w-4 h-4 mr-2 transition-transform duration-200 group-hover:translate-x-0.5',
                        course.bgColor.replace('bg-', 'text-'),
                      ]"
                    />
                  </span>
                  {{ area }}
                </div>
              </div>
            </div>

            <button
              @click="navigateTo(`/courses?category=${course.category}`)"
              :class="[
                'w-full text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2 group',
                course.buttonColor,
                course.buttonHoverColor,
              ]"
            >
              <span>{{ content.buttonText }}</span>
              <Icon
                name="mdi:arrow-right"
                class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="bg-brand rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white"
      >
        <div class="flex flex-col sm:flex-row items-center justify-center">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4"
          >
            <Icon
              :name="content.bottomSection.icon"
              class="text-gray-900 text-lg sm:text-xl"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            />
          </div>
          <h3 class="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            {{ content.bottomSection.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { COURSES_SECTION_DATA, COURSES_SECTION_CONTENT } from "@/constants";

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

const courses = COURSES_SECTION_DATA;
const content = COURSES_SECTION_CONTENT;
</script>
