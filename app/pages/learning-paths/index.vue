<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-brand/5 to-white">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Choose Your
            <span class="text-brand">Learning Path</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover tailored learning journeys designed for your career stage
            and goals. From fresh graduates to seasoned professionals and
            enterprises.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <!-- Freshers Path -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div class="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20"></div>
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
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
                  Fundamentals of Programming
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
                  Industry-Ready Projects
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
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
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20"></div>
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
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
                  Advanced Technologies
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
                  Flexible Schedules
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
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
            <div class="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-6">
                <Icon name="mdi:office-building" class="w-8 h-8 text-white mb-2" />
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
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
                  Custom Training Programs
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
                  Team Collaboration Tools
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-500 mr-2" />
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
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Not Sure Which Path is Right for You?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Take our quick assessment to get personalized recommendations based on
          your background, goals, and current skill level.
        </p>
        <button
          @click="$emit('open-quiz')"
          class="bg-brand text-white px-8 py-4 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-lg hover:shadow-lg"
        >
          Find Your Perfect Path
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Learning Paths - Teknikoz E-Learning',
  description: 'Choose from tailored learning paths designed for freshers, professionals, and enterprises. Start your tech journey with the right program.',
  ogTitle: 'Learning Paths - Teknikoz E-Learning',
  ogDescription: 'Choose from tailored learning paths designed for freshers, professionals, and enterprises. Start your tech journey with the right program.',
  ogImage: '/assets/images/learning-paths-og.jpg',
  twitterCard: 'summary_large_image',
})
</script>