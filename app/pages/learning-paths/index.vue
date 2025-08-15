<template>
  <div>
    <section class="pt-16 sm:pt-20 bg-gradient-to-br from-brand/5 to-white">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Choose Your
            <span class="text-brand">Learning Path</span>
          </h1>
          <p
            class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover tailored learning journeys designed for your career stage
            and goals. From fresh graduates to seasoned professionals and
            enterprises.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16"
        >
          <!-- Freshers Path -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div class="h-48 relative overflow-hidden">
              <img
                src="/assets/images/fresher-learning-path.jpeg"
                alt="Freshers Learning Path"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-6">
                <Icon name="mdi:school" class="w-8 h-8 text-white mb-2" />
                <h3 class="text-xl font-bold text-white">For Freshers</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">
                Start your tech journey with our comprehensive beginner-friendly
                programs designed to build strong foundations.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center">
                  <Icon
                    name="mdi:code-braces"
                    class="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                  />
                  Fundamentals of Programming
                </li>
                <li class="flex items-center">
                  <Icon
                    name="mdi:rocket-launch"
                    class="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"
                  />
                  Industry-Ready Projects
                </li>
                <li class="flex items-center">
                  <Icon
                    name="mdi:account-tie-voice"
                    class="w-4 h-4 text-purple-500 mr-2 flex-shrink-0"
                  />
                  Career Guidance & Placement
                </li>
              </ul>
              <NuxtLink
                to="/learning-paths/freshers"
                class="w-full bg-brand text-white py-3 px-6 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-center block"
              >
                Explore Freshers Path
              </NuxtLink>
            </div>
          </div>

          <!-- Professionals Path -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div class="h-48 relative overflow-hidden">
              <img
                src="/assets/images/pro-learning-path.jpeg"
                alt="Professionals Learning Path"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-6">
                <Icon name="mdi:account-tie" class="w-8 h-8 text-white mb-2" />
                <h3 class="text-xl font-bold text-white">For Professionals</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">
                Advance your career with specialized courses designed for
                working professionals seeking to upskill or switch domains.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center">
                  <Icon
                    name="mdi:chip"
                    class="w-4 h-4 text-purple-500 mr-2 flex-shrink-0"
                  />
                  Advanced Technologies
                </li>
                <li class="flex items-center">
                  <Icon
                    name="mdi:clock-time-eight-outline"
                    class="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"
                  />
                  Flexible Schedules
                </li>
                <li class="flex items-center">
                  <Icon
                    name="mdi:account-group"
                    class="w-4 h-4 text-orange-500 mr-2 flex-shrink-0"
                  />
                  Leadership & Management
                </li>
              </ul>
              <NuxtLink
                to="/learning-paths/professionals"
                class="w-full bg-brand text-white py-3 px-6 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-center block"
              >
                Explore Professional Path
              </NuxtLink>
            </div>
          </div>

          <!-- Enterprises Path -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div class="h-48 relative overflow-hidden">
              <img
                src="/assets/images/enterp-learning-path.jpeg"
                alt="Enterprise Learning Path"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-6">
                <Icon
                  name="mdi:office-building"
                  class="w-8 h-8 text-white mb-2"
                />
                <h3 class="text-xl font-bold text-white">For Enterprises</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">
                Transform your organization with comprehensive training programs
                designed to upskill your entire team.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center">
                  <Icon
                    name="mdi:puzzle"
                    class="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0"
                  />
                  Custom Training Programs
                </li>
                <li class="flex items-center">
                  <Icon
                    name="mdi:account-multiple-check"
                    class="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0"
                  />
                  Team Collaboration Tools
                </li>
                <li class="flex items-center">
                  <Icon
                    name="mdi:chart-line"
                    class="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                  />
                  Progress Tracking & Analytics
                </li>
              </ul>
              <NuxtLink
                to="/learning-paths/enterprises"
                class="w-full bg-brand text-white py-3 px-6 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-center block"
              >
                Explore Enterprise Path
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-20 bg-gray-50">
      <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Not Sure Which Path is Right for You?
        </h2>
        <p
          class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          Take our quick assessment to get personalized recommendations based on
          your background, goals, and current skill level.
        </p>
        <button
          @click="openQuiz"
          class="bg-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-base sm:text-lg hover:shadow-lg"
        >
          Find Your Perfect Path
        </button>
      </div>
    </section>

    <!-- Quiz Modal -->
    <FindYourPathQuiz
      :showQuiz="showQuiz"
      @close="closeQuiz"
      @result="handleQuizResult"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FindYourPathQuiz from "@/components/Quiz/FindYourPathQuiz.vue";
import { useSeoMeta } from "nuxt/app";

// Quiz state management
const showQuiz = ref(false);

const openQuiz = () => {
  showQuiz.value = true;
};

const closeQuiz = () => {
  showQuiz.value = false;
};

const handleQuizResult = (result: any) => {
  console.log("Quiz completed with result:", result);
};

// SEO Meta
useSeoMeta({
  title: "Learning Paths - Teknikoz E-Learning",
  description:
    "Choose from tailored learning paths designed for freshers, professionals, and enterprises. Start your tech journey with the right program.",
  ogTitle: "Learning Paths - Teknikoz E-Learning",
  ogDescription:
    "Choose from tailored learning paths designed for freshers, professionals, and enterprises. Start your tech journey with the right program.",
  ogImage: "/assets/images/learning-paths-og.jpg",
  twitterCard: "summary_large_image",
});
</script>
