<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          {{ content.title.main }}
          <span class="text-brand">{{ content.title.highlight }}</span>
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty px-2"
        >
          {{ content.subtitle }}
        </p>
      </div>

      <!-- Learning Paths Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
      >
        <div
          v-for="learningPath in learningPaths"
          :key="learningPath.id"
          :class="[
            'bg-white rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 hover:shadow-xl transition-all duration-300',
            learningPath.borderColor,
            learningPath.hoverBorderColor,
          ]"
        >
          <div class="flex items-start mb-4 sm:mb-6">
            <div
              :class="[
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0',
                learningPath.bgColor,
              ]"
            >
              <Icon
                :name="learningPath.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {{ learningPath.title }}
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm">
                {{ learningPath.description }}
              </p>
            </div>
          </div>

          <!-- Features list -->
          <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <li
              v-for="feature in learningPath.features"
              :key="feature"
              class="flex items-center text-gray-700 text-sm sm:text-base"
            >
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              {{ feature }}
            </li>
          </ul>

          <button
            @click="openQuiz()"
            :class="[
              'w-full text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base flex items-center justify-center group',
              learningPath.buttonColor,
              learningPath.buttonHoverColor,
            ]"
          >
            {{ content.buttonText }}
            <Icon
              name="mdi:arrow-right"
              class="ml-2 text-base group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <button
          @click="openQuiz"
          class="bg-brand text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 flex items-center group overflow-hidden"
        >
          {{ content.ctaButton.text }}
          <Icon
            :name="content.ctaButton.icon"
            class="ml-2 text-lg sm:text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"
          />
        </button>
      </div>

      <!-- Quiz Modal -->
      <FindYourPathQuiz
        :showQuiz="showQuiz"
        @close="closeQuiz"
        @result="handleQuizResult"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LEARNING_PATHS_DATA, LEARNING_PATHS_CONTENT } from "@/constants";
import FindYourPathQuiz from "~/components/Quiz/FindYourPathQuiz.vue";

const learningPaths = LEARNING_PATHS_DATA;
const content = LEARNING_PATHS_CONTENT;

const showQuiz = ref(false);

const openQuiz = () => {
  showQuiz.value = true;
};

const closeQuiz = () => {
  showQuiz.value = false;
};

const handleQuizResult = (result: any) => {
  console.log("Quiz result:", result);
};
</script>
