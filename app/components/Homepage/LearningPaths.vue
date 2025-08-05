<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          Choose Your <span class="text-brand">Learning Path</span>
        </h2>
        <p
          class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-pretty px-2"
        >
          Tailored programs designed for every career stage and goal
        </p>
      </div>

      <!-- Learning Paths Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
      >
        <!-- Freshers -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-start mb-4 sm:mb-6">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
            >
              <Icon name="mdi:school" class="text-white text-2xl sm:text-3xl" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-xl sm:text-2xl font-bold text-brand mb-1">
                Freshers
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm">
                Kickstart your career with in-demand PLM and AI skills
              </p>
            </div>
          </div>

          <!-- Features list -->
          <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Zero to hero training
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Industry-ready projects
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Career guidance
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Placement support
            </li>
          </ul>

          <button
            @click="navigateToFreshers"
            class="bg-gray-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>

        <!-- Professionals -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-start mb-4 sm:mb-6">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
            >
              <Icon
                name="mdi:briefcase-check"
                class="text-white text-xl sm:text-2xl"
              />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-xl sm:text-2xl font-bold text-brand mb-1">
                Professionals
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm">
                Upskill to lead digital transformation in engineering
              </p>
            </div>
          </div>

          <!-- Features list -->
          <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Advanced skill development
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Leadership preparation
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Industry connections
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Career advancement
            </li>
          </ul>

          <button
            @click="navigateToProfessionals"
            class="bg-gray-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>

        <!-- Enterprises -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-start mb-4 sm:mb-6">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
            >
              <Icon
                name="mdi:office-building"
                class="text-white text-xl sm:text-2xl"
              />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-xl sm:text-2xl font-bold text-brand mb-1">
                Enterprises
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm">
                Train your team for Industry 4.0 success
              </p>
            </div>
          </div>

          <!-- Features list -->
          <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Team training programs
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Customized curriculum
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              On-site training
            </li>
            <li class="flex items-center text-gray-700 text-sm sm:text-base">
              <span
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mr-2 sm:mr-3 flex-shrink-0"
              ></span>
              Corporate discounts
            </li>
          </ul>

          <button
            @click="navigateToEnterprises"
            class="bg-gray-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          @click="openQuiz"
          class="w-full sm:w-auto bg-brand text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-brand/80 transition-colors duration-300"
        >
          Find Your Path
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

<script setup>
import { ref } from 'vue'
import FindYourPathQuiz from '~/components/Quiz/FindYourPathQuiz.vue'

const showQuiz = ref(false)

const navigateToFreshers = () => {
  navigateTo('/learning-paths/freshers')
}

const navigateToProfessionals = () => {
  navigateTo('/learning-paths/professionals')
}

const navigateToEnterprises = () => {
  navigateTo('/learning-paths/enterprises')
}

const openQuiz = () => {
  showQuiz.value = true
}

const closeQuiz = () => {
  showQuiz.value = false
}

const handleQuizResult = (result) => {
  console.log('Quiz result:', result)
  navigateTo(result.path)
}
</script>
